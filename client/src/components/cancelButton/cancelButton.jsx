import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles.jsx';

const CancelButton = (props) => {
  const { modalDispatch } = props;
  const resetValue = () => modalDispatch({ type: 'reset' });
  return (
    <S.CancelButton onClick={resetValue}>
      지우기
    </S.CancelButton>
  );
};

CancelButton.propTypes = {
  modalDispatch: PropTypes.func.isRequired,
};

export default CancelButton;
