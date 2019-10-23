import React from 'react';
import * as S from './styles.jsx';
import Room from '../../../components/room/room.jsx';

const RoomList = (props) => {
  const { rooms } = props || false;
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
          bedRoomCount={room.bedRoomCount}
          bathroomCount={room.bathroomCount}
        />
      );
    });
  };

  return (
    <S.RoomList>
      {rooms && createRooms()}
    </S.RoomList>
  );
};

export default RoomList;
