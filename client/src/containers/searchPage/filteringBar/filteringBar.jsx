import React from 'react';
import styled from 'styled-components';
import FilteringButton from '../../../components/filteringButton/filteringButton.jsx';

const filteringBar = () => {
  const FilteringBar = styled.header`
    display: flex;
    flex-display: row;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding: 8px 0 8px 20px;
    font-size: 14px;
  `;

  const options = ['날짜', '인원', '숙소유형', '가격', '필터추가'];
  const filteringBtnList = options.map((option) => {
    return <FilteringButton key={option} filteringOption={option} />;
  });

  return (
    <FilteringBar>
      {filteringBtnList}
    </FilteringBar>
  );
};

export default filteringBar;
