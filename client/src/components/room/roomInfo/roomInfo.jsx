import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles.jsx';
import RoomInfoHeader from './roomInfoHeader/roonInfoHeader.jsx';
import {
  refineRoomMainSpec,
  refineRoomSubSpec,
  refineRoomOptions,
} from '../../../utils/refine.js';

const RoomInfo = (props) => {
  const {
    title,
    isSuperHost,
    star,
    type,
    bedCount,
    headCount,
    bedroomCount,
    bathroomCount,
    option,
  } = props;
  return (
    <S.RoomInfo>
      <RoomInfoHeader isSuperHost={isSuperHost} star={star} />
      <S.RoomMainSpec>{refineRoomMainSpec(type, bedCount)}</S.RoomMainSpec>
      <S.RoomTitle>{title}</S.RoomTitle>
      <S.RoomSubSpec>{refineRoomSubSpec(headCount, bedroomCount, bathroomCount)}</S.RoomSubSpec>
      <S.RoomOption>{refineRoomOptions(option)}</S.RoomOption>
      <S.ReservationButton>예약하기</S.ReservationButton>
    </S.RoomInfo>
  );
};

RoomInfo.propTypes = {
  title: PropTypes.string.isRequired,
  isSuperHost: PropTypes.number.isRequired,
  star: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  headCount: PropTypes.number.isRequired,
  bedCount: PropTypes.number.isRequired,
  bedroomCount: PropTypes.number.isRequired,
  bathroomCount: PropTypes.number.isRequired,
  option: PropTypes.string.isRequired,
};

export default RoomInfo;
