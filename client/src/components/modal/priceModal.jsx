import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles.jsx';
import PriceSlider from '../priceSlider/pricsSlider.jsx';
import SaveButton from '../saveButton/saveButton.jsx';
import CancelButton from '../cancelButton/cancelButton.jsx';

const PriceModal = (props) => {
  const { priceModal, priceModalDispatch, setUrlQueryDispatch } = props;
  return (
    <S.PriceModal>
      <S.PriceSliderTitle>
        가격 범위
        <S.PriceSliderSubTitle>
        (단위: 만원)
        </S.PriceSliderSubTitle>
      </S.PriceSliderTitle>
      <PriceSlider priceModal={priceModal} priceModalDispatch={priceModalDispatch} />
      <S.CountModalFooter>
        <CancelButton modalDispatch={priceModalDispatch} />
        <SaveButton modalDispatch={setUrlQueryDispatch} />
      </S.CountModalFooter>
    </S.PriceModal>
  );
};

PriceModal.propTypes = {
  priceModal: PropTypes.object.isRequired,
  priceModalDispatch: PropTypes.func.isRequired,
  setUrlQueryDispatch: PropTypes.func.isRequired,
};

export default PriceModal;
