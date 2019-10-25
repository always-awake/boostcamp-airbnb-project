const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const routers = require('./config/routers');

dotenv.config();

const app = express();

// cors setting
const whitelist = ['http://localhost:4000'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET_KEY));
app.use(routers);

module.exports = app;
