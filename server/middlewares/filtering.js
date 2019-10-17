const Sequelize = require('sequelize');
const { onlyIntOptionValue } = require('../utils/filtering');

const { Op } = Sequelize;

/**
 * req 내 쿼리 스트링 값들(필터링 옵션 값들)을
 * 원하는 데이터 형식으로 변환해주는 역할의 미들웨어 함수
 * 변환된 filterOption 값을 req의 프로퍼티 값으로 저장한다.
 * @param {*} req
 * @param {*} next
 */
const refineFilterOptions = (req, next) => {
  const filterOption = {};

  const checkIn = !!(req.query.checkIn);
  const checkOut = !!(req.query.checkOut);
  req.includeDate = checkIn && checkOut;

  Object.entries(req.query).forEach((option) => {
    const optionName = option[0];
    const optionValue = option[1];
    if (onlyIntOptionValue(optionName)) {
      filterOption[optionName] = {
        [Op.gte]: parseInt(optionValue, 10),
      };
    } else if (optionName.includes('isSuperHost')) {
      filterOption[optionName] = optionName;
    }
  });
  req.filterOption = filterOption;
  next();
};

module.exports = {
  refineFilterOptions,
};
