/**
 * 영어로 저장되어 있는 숙소 타입을 한국말 숙소 타입으로 변경해주는 유틸함수
 * @param { String } roomType
 */
const convertToKoreanType = (roomType) => {
  switch (roomType) {
    case 'Whole':
      return '집 전체';
    case 'Private':
      return '개인실';
    case 'Hotel':
      return '호텔 객실';
    case 'Shared':
      return '다인실';
    default:
      return '해당사항없음';
  }
};

export {
};
