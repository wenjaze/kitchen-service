const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middleware = require('./middleware');

const PORT = process.env.PORT || 1337;
const app = express();

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:4200',
}));

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

app.use(middleware.notFound);
app.use(middleware.errorHandler);

app.listen(PORT, () => {
	console.log(`Listening at http://localhost:${PORT}`); // eslint-disable-line
});
