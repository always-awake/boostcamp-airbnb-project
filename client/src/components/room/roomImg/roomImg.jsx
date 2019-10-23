import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles.jsx';

const RoomImg = (props) => {
  const { thumbnail } = props;
  return (
    <S.RoomImgDiv>
      <S.RoomImg src={thumbnail} alt="room_thumbnail" />
    </S.RoomImgDiv>
  );
};

RoomImg.propTypes = {
  thumbnail: PropTypes.string.isRequired,
};

export default RoomImg;
