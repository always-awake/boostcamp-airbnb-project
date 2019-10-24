import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles.jsx';

const CancelButton = (props) => {
  const { countModalDispatch } = props;
  const resetAllCountValue = () => countModalDispatch({ type: 'resetCount' });
  return (
    <S.CancelButton onClick={resetAllCountValue}>
      지우기
    </S.CancelButton>
  );
};

CancelButton.propTypes = {
  countModalDispatch: PropTypes.func.isRequired,
};

export default CancelButton;
