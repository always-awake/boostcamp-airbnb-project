import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 400px;
  height: 48px;
  color: #757575;
`;

const searchInput = () => {
  return (
    <SearchInput contenteditable="true">
      숙소를 검색해주세요.
    </SearchInput>
  );
};

export default searchInput;
