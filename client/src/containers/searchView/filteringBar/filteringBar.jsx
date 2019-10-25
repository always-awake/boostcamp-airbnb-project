import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles.jsx';
import FilteringButton from '../../../components/filteringButton/filteringButton.jsx';

const FilteringBar = (props) => {
  const { countModalDispatch, priceModalDispatch } = props;
  const initialOptions = {
    date: ['날짜', null],
    headCount: ['인원', countModalDispatch],
    type: ['숙소유형', null],
    price: ['가격', priceModalDispatch],
    addFilter: ['필터 추가', null],
  };
  // eslint-disable-next-line no-unused-vars
  const [options, setOptions] = useState(initialOptions);
  const filteringBtnList = Object.keys(options).map((key) => {
    return (
      <FilteringButton
        key={key}
        optionValue={options[key][0]}
        dispatch={options[key][1]}
      />
    );
  });

  return (
    <S.FilteringBar>
      {filteringBtnList}
    </S.FilteringBar>
  );
};

FilteringBar.propTypes = {
  countModalDispatch: PropTypes.func.isRequired,
  priceModalDispatch: PropTypes.func.isRequired,
};

export default FilteringBar;
