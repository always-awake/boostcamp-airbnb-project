import React from 'react';
import * as S from './styles.jsx';

const SearchIcon = () => {
  const SEARCH_BAR_ICON = '../../../assets/icon/search_icon.png';
  const SEARCH_BAR_ALT = 'search-bar-icon';
  return (
    <S.SearchIconDiv>
      <S.SearchIcon src={SEARCH_BAR_ICON} alt={SEARCH_BAR_ALT} />
    </S.SearchIconDiv>
  );
};

export default SearchIcon;
