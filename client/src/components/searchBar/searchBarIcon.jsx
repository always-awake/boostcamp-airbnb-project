import React from 'react';
import styled from 'styled-components';

const SEARCH_BAR_ICON = '../../../assets/icon/search_icon.png';
const SEARCH_BAR_ALT = 'search-bar-icon';

const SearchIconDiv = styled.div`
height: 22px;
weight: 22px;
margin-left: 10px;
`;
const SearchIcon = styled.img`
height: 100%;
weight: 100%;
`;

const searchIcon = () => {
  return (
    <SearchIconDiv>
      <SearchIcon src={SEARCH_BAR_ICON} alt={SEARCH_BAR_ALT} />
    </SearchIconDiv>
  );
};

export default searchIcon;
