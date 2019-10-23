import React from 'react';
import * as S from './styles.jsx';
import Header from './header/header.jsx';
import FilteringBar from './filteringBar/filteringBar.jsx';
import RoomList from './roomList/roomList.jsx';
import useGet from '../../utils/hooks/useGet.js';
import FETCH_ROOM_LIST_URL from '../../utils/urls.js';

const SearchPage = () => {
  const [data] = useGet(FETCH_ROOM_LIST_URL);
  console.log(data);
  return (
    <S.SearchPage>
      <Header />
      <FilteringBar />
      <RoomList />
    </S.SearchPage>
  );
};

export default SearchPage;
