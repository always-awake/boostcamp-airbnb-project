const express = require('express');
const userRouter = require('../User/routers');

const router = express.Router();

router.use('/users', userRouter);

module.exports = router;
