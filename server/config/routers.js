const express = require('express');
const userRouter = require('../User/routers');
const reservationRouter = require('../Reservation/routers');
const roomRouter = require('../Room/routers');

const router = express.Router();

router
  .use('/rooms', roomRouter)
  .use('/users', userRouter)
  .use('/reservations', reservationRouter);

module.exports = router;
