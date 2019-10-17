const Sequelize = require('sequelize');

const { Op } = Sequelize;

/**
 * filterOption 객체(숙소 필터링 조건 정보를 담고있는 객체)에
 * 가격에 대한 필터링 옵션을 추가해주는 유틸 함수
 * @param { Object } req
 * @return { Object } filterOption
 */
const addPriceOption = (req) => {
  const { filterOption } = req;
  const minPrice = req.query.minPrice || false;
  const maxPrice = req.query.maxPrice || false;

  if (minPrice && maxPrice) {
    filterOption.price = {
      [Op.gte]: parseInt(minPrice, 10),
      [Op.lte]: parseInt(maxPrice, 10),
    };
  } else if (minPrice) {
    filterOption.price = {
      [Op.gte]: parseInt(minPrice, 10),
    };
  } else if (maxPrice) {
    filterOption.price = {
      [Op.lte]: parseInt(maxPrice, 10),
    };
  }
  return filterOption;
};

/**
 * 정수값을 갖고 있지 않은 필터링 옵션인지의 여부를 판별하는 유틸 함수
 * @param { String } optionName
 * @returns { Boolean }
 */
const onlyIntOptionValue = (optionName) => {
  const priceResult = !optionName.includes('Price');
  const nameResult = !optionName.includes('isSuperHost');
  const checkResult = !optionName.includes('check');
  return priceResult && nameResult && checkResult;
};

module.exports = {
  addPriceOption,
  onlyIntOptionValue,
};
