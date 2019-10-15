const express = require('express');
const { login } = require('./controllers');

const userRouter = express.Router();

userRouter.route('/auth')
  .post(login);

module.exports = userRouter;
