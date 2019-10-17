const express = require('express');
const userRouter = require('../User/routers');
const reservationRouter = require('../Reservation/routers');

const router = express.Router();

router.use('/users', userRouter);
router.use('/reservations', reservationRouter);

module.exports = router;
