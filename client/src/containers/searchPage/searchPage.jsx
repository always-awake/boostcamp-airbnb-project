import React from 'react';
import styled from 'styled-components';
import Header from './header/header.jsx';
import FilteringBar from './filteringBar/filteringBar.jsx';

const searchPage = () => {
  const SearchPage = styled.div`
  `;

  return (
    <SearchPage>
      <Header />
      <FilteringBar />
    </SearchPage>
  );
};

export default searchPage;
