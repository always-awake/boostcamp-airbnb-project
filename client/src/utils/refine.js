/**
 * 영어로 저장되어 있는 숙소 타입을 한국말 숙소 타입으로 변경해주는 유틸함수
 * @param { String } English room Type
 * @return { String } korean Room Type
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
 * @param { String } type
 * @param { Number } bedCount
 * @returns { String } Room's Main Spec String
 */
const refineRoomMainSpec = (type, bedCount) => {
  const koreanType = convertToKoreanType(type);
  return `${koreanType} · 침대 ${bedCount}개`;
};

/**
 * 숙소 인원 수, 침실 수, 욕실 수를 매개변수로 받아, 알맞은 형태의 숙소 서브 상세정보 문자열을 리턴하는 유틸 함수
 * @param { Number } headCount
 * @param { Number } bedroomCount
 * @param { Number } bathroomCount
 * @returns { String } Room's Sub Spec String
 */
const refineRoomSubSpec = (headCount, bedroomCount, bathroomCount) => {
  return `인원 ${headCount}명 · 침실${bedroomCount}개 · 욕실${bathroomCount}개`;
};

/**
 * 옵션 목록 문자열을 매개변수로 받아, 알맞은 형태의 숙소 옵션 문자열을 리턴하는 유틸 함수
 * @param { String } option
 * @returns { String } Room's option String
 */
const refineRoomOptions = (option) => {
  const optionList = option.split(',');
  return optionList.join(' · ');
};

export {
  refineRoomMainSpec,
  refineRoomSubSpec,
  refineRoomOptions,
};
