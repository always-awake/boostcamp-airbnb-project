import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles.jsx';

const FilteringButton = (props) => {
  const { optionValue, dispatch } = props;
  return (
    <S.FilteringButton
      onClick={() => dispatch({ type: 'changeModalActive' })}
    >
      {optionValue}
    </S.FilteringButton>
  );
};

FilteringButton.propTypes = {
  optionValue: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default FilteringButton;
