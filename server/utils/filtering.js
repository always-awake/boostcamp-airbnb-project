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
    filterOption.price = { [Op.gte]: parseInt(minPrice, 10) };
  } else if (maxPrice) {
    filterOption.price = { [Op.lte]: parseInt(maxPrice, 10) };
  }
  return filterOption;
};

/**
 * filterOption 객체에 가격과 날짜에 대한 필터링 옵션을 추가해주는 유틸 함수
 * 매개변수로 받은 reservedRoomIdList 내에 있는 id 값을 갖고 있지 않은 숙소 목록을 필터링
 * @param {*} req
 * @param { Array } reservedRoomIdList
 */
const addDatePriceOption = (req, reservedRoomIdList) => {
  const filterOption = addPriceOption(req);
  filterOption.id = { [Op.notIn]: reservedRoomIdList };
  return filterOption;
};

/**
 * 정수값을 갖고 있지 않은 필터링 옵션인지의 여부를 판별하는 유틸 함수
 * @param { String } optionName
 * @returns { Boolean }
 */
const onlyIntOption = (optionName) => {
  const bedResult = optionName.includes('bedCount');
  const bedroomResult = optionName.includes('bedroomCount');
  const bathroomResult = optionName.includes('bathroomCount');
  const headCountResult = optionName.includes('headCount');
  return bedResult || bedroomResult || bathroomResult || headCountResult;
};

/**
 * 가격,날짜에 대한 필터링 옵션이 아닌 필터링 옵션인지의 여부를 판별하는 유틸 함수
 * isSuperHost, type, name 필터링 옵션인지의 여부를 판별
 * @param { String } optionName
 * @returns { Boolean }
 */
const notPriceCheckPageOption = (optionName) => {
  const priceResult = !optionName.includes('Price');
  const checkResult = !optionName.includes('check');
  const pageResult = !optionName.includes('page');
  return priceResult && checkResult && pageResult;
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
        checkIn: { [Op.gte]: checkInDate, [Op.lt]: checkOutDate },
        checkOut: { [Op.gt]: checkInDate, [Op.lt]: checkOutDate },
      },
      [Op.and]: {
        checkIn: { [Op.lte]: checkInDate },
        checkOut: { [Op.gte]: checkOutDate },
      },
    },
  };
};

/**
 * 매개 변수로 받은 예약 리스트 내 roomId 들을 중복없는 리스트로 리턴하는 유틸함수
 * @param {Array} reservedRoomList
 */
const refineReservations = (reservations) => {
  const reservedRoomIdList = reservations.map((reservation) => reservation.roomId);
  return Array.from(new Set(reservedRoomIdList));
};

/**
 * 페이지네이션 기능 구현 시, 조회할 숙소 목록의 offset을 구하는 유틸 함수
 * @param { Number } page
 * @param { Number } roomCountPerPage
 */
const calculateOffset = (page, roomCountPerPage) => {
  const firstPage = 1;
  const zeroOffset = 0;
  return (page > firstPage) ? roomCountPerPage * (page - firstPage) : zeroOffset;
};

module.exports = {
  addPriceOption,
  onlyIntOption,
  checkReservationOption,
  notPriceCheckPageOption,
  refineReservations,
  addDatePriceOption,
  calculateOffset,
};
