const path = require('path');
const cookieParser = require('cookie-parser');
const express = require('express');
const dotenv = require('dotenv');
const routers = require('./config/routers');

dotenv.config();

const app = express();

app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET_KEY));
app.use(routers);

module.exports = app;
