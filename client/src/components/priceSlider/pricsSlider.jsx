import React from 'react';
import Slider from '@material-ui/core/Slider';
import PropTypes from 'prop-types';
import * as S from './styles.jsx';

const PriceSlider = (props) => {
  const { priceModal, priceModalDispatch } = props;
  const [value, setValue] = React.useState(
    [priceModal.minPrice, priceModal.maxPrice]
  );
  const handleChange = (event, newValue) => {
    setValue(newValue);
    priceModalDispatch({
      type: 'setPrice',
      minPrice: newValue[0],
      maxPrice: newValue[1],
    });
  };
  const marks = [
    { value: 0, label: '0' },
    { value: 5, label: '5' },
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' },
    { value: 50, label: '50' },
    { value: 70, label: '70' },
  ];

  return (
    <S.PriceSlider>
      <Slider
        style={{ color: '#222222' }}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        marks={marks}
        step={1}
        min={0}
        max={80}
      />
    </S.PriceSlider>
  );
};

PriceSlider.propTypes = {
  priceModal: PropTypes.object.isRequired,
  priceModalDispatch: PropTypes.func.isRequired,
};

export default PriceSlider;
