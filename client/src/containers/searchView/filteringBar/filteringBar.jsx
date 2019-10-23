import React from 'react';
import * as S from './styles.jsx';
import FilteringButton from '../../../components/filteringButton/filteringButton.jsx';

const filteringBar = () => {
  const options = ['날짜', '인원', '숙소유형', '가격', '필터추가'];
  const filteringBtnList = options.map((option) => {
    return <FilteringButton key={option} filteringOption={option} />;
  });

  return (
    <S.FilteringBar>
      {filteringBtnList}
    </S.FilteringBar>
  );
};

export default filteringBar;
