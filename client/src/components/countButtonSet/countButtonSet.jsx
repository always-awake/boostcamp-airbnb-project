import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles.jsx';

const CountButtonSet = (props) => {
  const {
    countTitle,
    countSubtitle,
    count,
    modalDispatch,
    dispatchType,
  } = props;
  const decreaseCount = () => modalDispatch({ type: dispatchType[0] });
  const increaseCount = () => modalDispatch({ type: dispatchType[1] });

  return (
    <S.CountButtonSet>
      <S.CountTitle>
        {countTitle}
        <S.CountSubTitle>{countSubtitle}</S.CountSubTitle>
      </S.CountTitle>
      <S.CountButtonSetWrapper>
        <S.CountButton onClick={decreaseCount}>-</S.CountButton>
        <S.CountText>
          {count}
        </S.CountText>
        <S.CountButton onClick={increaseCount}>+</S.CountButton>
      </S.CountButtonSetWrapper>
    </S.CountButtonSet>
  );
};

CountButtonSet.propTypes = {
  countTitle: PropTypes.string.isRequired,
  countSubtitle: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  modalDispatch: PropTypes.func.isRequired,
  dispatchType: PropTypes.array.isRequired,
};

export default CountButtonSet;
