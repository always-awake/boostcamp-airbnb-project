import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles.jsx';

const RoomInfo = (props) => {
  const { type } = props;

  return (
    <S.RoomInfo>
      {type}
    </S.RoomInfo>
  );
};

RoomInfo.propTypes = {
  type: PropTypes.string.isRequired,
};

export default RoomInfo;
