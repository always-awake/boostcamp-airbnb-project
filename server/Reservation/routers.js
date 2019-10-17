const express = require('express');
const { isAuthUser } = require('../middlewares/auth');
const {
  createReservation,
} = require('./controllers');

const userRouter = express.Router();

userRouter.route('/')
  .post(isAuthUser, createReservation);

module.exports = userRouter;
