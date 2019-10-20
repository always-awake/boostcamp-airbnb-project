const roomModel = require('./models');
const reservationModel = require('../Reservation/models');
const {
  addPriceOption,
  checkReservationOption,
  refineReservations,
  addDatePriceOption,
} = require('../utils/filtering');

/**
 * 필터링 옵션으로 날짜가 포함되어 있을 경우 숙소 필터링 요청을 처리하는 함수
 * @param {*} req
 * @param {*} res
 */
const filterWithDate = async (req, res) => {
  try {
    const overlapedReservations = await reservationModel.findAll({
      where: checkReservationOption(req.query),
      attributes: ['roomId'],
    });
    const reservedRoomIdList = refineReservations(overlapedReservations);
    const roomList = await roomModel.findAll({
      where: addDatePriceOption(req, reservedRoomIdList),
    });
    res.status(200).json({
      msg: 'Filtering Success!',
      data: {
        dataCount: roomList.length,
        rooms: roomList,
      },
    });
  } catch (e) {
    res.status(500).json({
      msg: 'Sorry Try again!',
    });
  }
};

/**
 * 필터링 옵션으로 날짜가 포함되어 있지 않을 경우 숙소 필터링 요청을 처리하는 함수
 * @param {*} req
 * @param {*} res
 */
const filterWithoutDate = async (req, res) => {
  try {
    const roomList = await roomModel.findAll({
      where: addPriceOption(req),
    });
    res.status(200);
    res.json({
      msg: 'Filtering Success!',
      data: {
        dataCount: roomList.length,
        rooms: roomList,
      },
    });
  } catch (e) {
    res.status(500);
    res.json({
      msg: 'Sorry Try again!',
    });
  }
};

/**
 * 필터링 옵션에 날짜 존재 여부에 따라 다른 함수를 호출하는 함수
 * @param {*} req
 * @param {*} res
 */
const getRoomList = (req, res) => (
  (req.includeDate) ? filterWithDate(req, res) : filterWithoutDate(req, res)
);

module.exports = {
  getRoomList,
};
