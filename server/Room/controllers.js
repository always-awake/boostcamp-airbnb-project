const roomModel = require('./models');
const { addPriceoption } = require('../utils/filtering');

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
