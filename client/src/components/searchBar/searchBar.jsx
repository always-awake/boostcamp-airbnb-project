import React from 'react';
import * as S from './styles.jsx';
import SearchBarIcon from './searchBarIcon.jsx';
import SearchInput from './searchInput.jsx';

const SearchBar = () => {
  return (
    <S.SearchBar>
      <SearchBarIcon />
      <SearchInput />
    </S.SearchBar>
  );
};

export default SearchBar;
