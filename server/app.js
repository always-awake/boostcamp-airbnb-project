const path = require('path');
const express = require('express');
const routers = require('./config/routers');

const app = express();

app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routers);

module.exports = app;
