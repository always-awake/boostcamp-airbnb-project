import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles.jsx';
import SaveButton from '../saveButton/saveButton.jsx';
import CancelButton from '../cancelButton/cancelButton.jsx';
import CountButtonSet from '../countButtonSet/countButtonSet.jsx';

const CountModal = (props) => {
  const { countModal, countModalDispatch, setUrlQueryDispatch } = props;
  return (
    <S.CountModal>
      <CountButtonSet
        countTitle="성인"
        countSubtitle="만 19세 이상"
        count={countModal.adultCount}
        modalDispatch={countModalDispatch}
        dispatchType={['adultCountDown', 'adultCountUp']}
      />
      <CountButtonSet
        countTitle="어린이"
        countSubtitle="2~12세"
        count={countModal.childCount}
        modalDispatch={countModalDispatch}
        dispatchType={['childCountDown', 'childCountUp']}
      />
      <CountButtonSet
        countTitle="유아"
        countSubtitle="2세 미만"
        count={countModal.babyCount}
        modalDispatch={countModalDispatch}
        dispatchType={['babyCountDown', 'babyCountUp']}
      />
      <S.CountModalFooter>
        <CancelButton modalDispatch={countModalDispatch} />
        <SaveButton
          countModal={countModal}
          setUrlQueryDispatch={setUrlQueryDispatch}
          modalDispatch={countModalDispatch}
        />
      </S.CountModalFooter>
    </S.CountModal>
  );
};

CountModal.propTypes = {
  countModal: PropTypes.object.isRequired,
  countModalDispatch: PropTypes.func.isRequired,
  setUrlQueryDispatch: PropTypes.func.isRequired,
};

export default CountModal;
