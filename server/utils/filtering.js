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
  const typeResult = !optionName.includes('type');
  return priceResult && nameResult && checkResult && typeResult;
};

/**
 * 예약 테이블에서 checkIn ~ checkOut 기간과 겹치는 예약을 필터링 할 때 사용될 where 조건을 리턴하는 유틸함수
 * @param {checkIn, checkOut}
 */
const checkReservationOption = ({ checkIn, checkOut }) => {
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  return {
    [Op.or]: {
      [Op.or]: {
        checkIn: {
          [Op.gte]: checkInDate,
          [Op.lt]: checkOutDate,
        },
        checkOut: {
          [Op.gt]: checkInDate,
          [Op.lt]: checkOutDate,
        },
      },
      [Op.and]: {
        checkIn: {
          [Op.lte]: checkInDate,
        },
        checkOut: {
          [Op.gte]: checkOutDate,
        },
      },
    },
  };
};

module.exports = {
  addPriceOption,
  onlyIntOptionValue,
  checkReservationOption,
};
