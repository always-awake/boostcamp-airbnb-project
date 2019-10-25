import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles.jsx';

const SaveButton = (props) => {
  const { countModal, setUrlQueryDispatch, modalDispatch } = props;
  const saveButtonClickEvent = () => {
    const headCount = countModal.adultCount + countModal.childCount;
    setUrlQueryDispatch({ type: 'setHeadCountOption', headCount });
    modalDispatch({ type: 'changeModalActive' });
  };
  return (
    <S.SaveButton onClick={saveButtonClickEvent}>
      저장
    </S.SaveButton>
  );
};

SaveButton.propTypes = {
  countModal: PropTypes.object.isRequired,
  setUrlQueryDispatch: PropTypes.func.isRequired,
  modalDispatch: PropTypes.func.isRequired,
};

export default SaveButton;
