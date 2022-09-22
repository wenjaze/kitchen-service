const { ResponseModel } = require('./models/req/ResponseModel');
const { ErrorModel } = require('./models/error/ErrorModel');

const notFound = (req, res, next) => {
  const error = new Error(`Not found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  req.error = error;
  res.status(statusCode);
  res.json(ResponseModel(false, 'Error occured', req.body, ErrorModel(error.code, error.message, error.name, error.stack)));
};

module.exports = {
  notFound,
  errorHandler,
};
