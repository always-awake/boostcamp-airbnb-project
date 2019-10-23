import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles.jsx';
import Room from '../../../components/room/room.jsx';

const RoomList = (props) => {
  const { rooms } = props;
  const createRooms = () => {
    return rooms.map((room) => {
      return (
        <Room
          key={room.id}
          type={room.type}
          title={room.title}
          thumbnail={room.thumbnail}
          price={room.price}
          star={room.star}
          option={room.option}
          isSuperHost={room.isSuperHost}
          hostId={room.hostId}
          headCount={room.headCount}
          bedCount={room.bedCount}
          bedroomCount={room.bedroomCount}
          bathroomCount={room.bathroomCount}
        />
      );
    });
  };

  return (
    <S.RoomList>
      <S.RoomListHeader>
        <S.RoomListHeaderImg src="https://a0.muscache.com/airbnb/static/packages/icon-uc-trophy.9ee78aa1.gif" />
        숙소에 대해  1,000,000개 이상의 게스트 후기가 있으며, 평점은 5점 만점입니다.
      </S.RoomListHeader>
      {rooms && createRooms()}
    </S.RoomList>
  );
};

RoomList.propTypes = {
  rooms: PropTypes.array.isRequired,
};

export default RoomList;
