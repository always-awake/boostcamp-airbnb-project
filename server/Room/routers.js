const express = require('express');
const { refineFilterOptions } = require('../middlewares/filtering');
const { getRoomList } = require('./controllers');

const userRouter = express.Router();

userRouter.route('/')
  .get(refineFilterOptions, getRoomList);

module.exports = userRouter;
