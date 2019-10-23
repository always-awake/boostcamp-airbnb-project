import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles.jsx';

const FilteringButton = (props) => {
  const { filteringOption } = props;

  return (
    <S.FilteringButton>
      {filteringOption}
    </S.FilteringButton>
  );
};

FilteringButton.propTypes = {
  filteringOption: PropTypes.string.isRequired,
};

export default FilteringButton;
