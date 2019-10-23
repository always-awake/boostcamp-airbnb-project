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

/**
 * 숙소 타입과 침대 개수를 매개변수로 받아, 알맞은 형태의 숙소 메인 상세정보 문자열을 리턴하는 유틸 함수
 * @param {*} type
 * @param {*} bedCount
 */
const refineRoomMainSpec = (type, bedCount) => {
  const koreanType = convertToKoreanType(type);
  return `${koreanType} · 침대 ${bedCount}개`;
};

export {
  refineRoomMainSpec,
};
