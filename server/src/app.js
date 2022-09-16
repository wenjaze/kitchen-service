const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const middleware = require('./middleware');

const PORT = process.env.PORT || 1337;
const app = express();

const appLogStream = fs.createWriteStream(path.join(__dirname, '/logs/app.log'), { flags: 'a' });

app.use(morgan('combined', { stream: appLogStream }));
app.use(helmet());
// frontend origin
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
