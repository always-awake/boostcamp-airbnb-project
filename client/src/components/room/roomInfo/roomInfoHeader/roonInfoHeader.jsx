import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles.jsx';

const RoomInfoHeader = (props) => {
  const { isSuperHost, star } = props;
  const STAR_ICON_PATH = '../../../assets/icon/star-icon.png';
  const SuperHostBadge = <S.SuperHostBadge>슈퍼호스트</S.SuperHostBadge>;
  const hostBadgo = <S.HostBadge>일반호스트</S.HostBadge>;
  const badge = isSuperHost ? SuperHostBadge : hostBadgo;

  return (
    <S.RoomInfoHeader>
      {badge}
      <S.RoomStar>
        <S.RoomStarImg src={STAR_ICON_PATH} alt="star_icon" />
        <S.RoomStarCount>{star}</S.RoomStarCount>
      </S.RoomStar>
    </S.RoomInfoHeader>
  );
};

RoomInfoHeader.propTypes = {
  isSuperHost: PropTypes.number.isRequired,
  star: PropTypes.number.isRequired,
};

export default RoomInfoHeader;
