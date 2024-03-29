const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const recipes = require('./api/recipes');
const ingredients = require('./api/ingredients');
const middleware = require('./middleware');

const PORT = process.env.NODE_ENV === 'production' ? process.env.PORT_PROD : process.env.PORT_DEV;

const app = express();

mongoose.connect(process.env.DATABASE_URL_DEV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const appLogStream = fs.createWriteStream(path.join(__dirname, '/logs/app.log'));

morgan.token('error', (req) => {
  if (req.error) { return `${req.error.message} - ${req.error.stack}`; }

  return null;
});
morgan.token('body', (req) => {
  if (req) { return JSON.stringify(req.body); }

  return null;
});

// #region LOG
// Error logs
// Console error logging
app.use(morgan(':error'));
// File error logging
app.use(morgan(':error', { stream: appLogStream }));
// Access logs
// Console access logging
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]\n:body'));
// File access logging
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]\n:body', { stream: appLogStream }));
// #endregion LOG

// Security header
app.use(helmet());
// Frontend origin
app.use(cors({
  origin: 'http://localhost:4200',
}));
// JSON body parsing middleware
app.use(express.json());
app.use('/api/v1/recipes', recipes);
app.use('/api/v1/ingredients', ingredients);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`); // eslint-disable-line
});
