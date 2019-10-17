const reservationModel = require('../Reservation/models');

/**
 * 예약 데이터 생성 요청을 처리하는 함수
 * @param {*} req
 * @param {*} res
 */
const createReservation = async (req, res) => {
  const { user } = req;
  const {
    roomId,
    checkIn,
    checkOut,
    totalPrice,
    headCount,
    adultCount,
    childCount,
    babyCount,
  } = req.body;

  try {
    await reservationModel.create({
      checkIn: new Date(checkIn),
      checkOut: new Date(checkOut),
      guestId: user.id,
      totalPrice,
      headCount,
      adultCount,
      childCount,
      babyCount,
      roomId,
    });
    res.status(201);
    res.json({
      msg: 'Make reservation success!',
    });
  } catch (e) {
    res.status(500);
    res.json({
      msg: 'Sorry Try again!',
    });
  }
};

module.exports = {
  createReservation,
};
