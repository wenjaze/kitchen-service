const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
require('dotenv').config();

const recipes = require('./api/recipes');
const middleware = require('./middleware');

const PORT = process.env.NODE_ENV === 'production' ? process.env.PORT_PROD : process.env.PORT_DEV;

const app = express();

mongoose.connect(process.env.DATABASE_URL_DEV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const appLogStream = fs.createWriteStream(path.join(__dirname, '/logs/app.log'));

// Console logging
// Logging to file
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'));
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]', { stream: appLogStream }));
app.use(helmet());
// Frontend origin
app.use(cors({
  origin: 'http://localhost:4200',
}));
// JSON body parsing middleware
app.use(express.json());
app.use('/api/v1/recipes', recipes);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`); // eslint-disable-line
});
