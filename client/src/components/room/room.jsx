import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles.jsx';
import RoomInfo from './roomInfo.jsx';

const Room = (props) => {
  const { type } = props;

  return (
    <S.Room>
      <RoomInfo type={type} />
    </S.Room>
  );
};

Room.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Room;
