import React from 'react';
import styled from 'styled-components';
import SearchBarIcon from './searchBarIcon.jsx';
import SearchInput from './searchInput.jsx';

const searchBar = () => {
  const SearchBar = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  width: 460px;
  border: 1px solid #EBEBEB;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  `;

  return (
    <SearchBar>
      <SearchBarIcon />
      <SearchInput />
    </SearchBar>
  );
};

export default searchBar;
