const express = require('express');
const {
  login,
  signUp,
} = require('./controllers');

const userRouter = express.Router();

userRouter.route('/')
  .post(signUp);

userRouter.route('/auth')
  .post(login);

module.exports = userRouter;
