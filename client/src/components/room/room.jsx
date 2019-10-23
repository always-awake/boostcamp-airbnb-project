import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles.jsx';
import RoomInfo from './roomInfo/roomInfo.jsx';
import RoomImg from './roomImg/roomImg.jsx';

const Room = (props) => {
  const {
    type,
    thumbnail,
    title,
    isSuperHost,
    headCount,
    bedroomCount,
    bedCount,
    bathroomCount,
    option,
    star,
  } = props;

  return (
    <S.Room>
      <RoomInfo
        type={type}
        title={title}
        isSuperHost={isSuperHost}
        headCount={headCount}
        bedroomCount={bedroomCount}
        bedCount={bedCount}
        bathroomCount={bathroomCount}
        option={option}
        star={star}
      />
      <RoomImg thumbnail={thumbnail} />
    </S.Room>
  );
};

Room.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  isSuperHost: PropTypes.number.isRequired,
  headCount: PropTypes.number.isRequired,
  bedroomCount: PropTypes.number.isRequired,
  bedCount: PropTypes.number.isRequired,
  bathroomCount: PropTypes.number.isRequired,
  option: PropTypes.string.isRequired,
  star: PropTypes.number.isRequired,
};

export default Room;
