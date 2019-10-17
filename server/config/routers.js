const express = require('express');
const userRouter = require('../User/routers');
const reservationRouter = require('../Reservation/routers');
const roomRouter = require('../Room/routers');

const router = express.Router();

router.use('/users', userRouter);
router.use('/reservations', reservationRouter);
router.use('/rooms', roomRouter);

module.exports = router;
