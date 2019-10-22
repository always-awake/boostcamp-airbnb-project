import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const filteringButton = (props) => {
  const { filteringOption } = props;

  const FilteringButton = styled.div`
  display: flex;
  flex-display: row;
  align-items: center;
  justify-content: center;
  padding: 0 15px 0 15px;
  margin: 0 5px 0 5px;
  height: 36px;
  border: 1px solid #B0B0B0;
  border-radius: 30px;
  color: #222222;
  `;

  return (
    <FilteringButton>
      {filteringOption}
    </FilteringButton>
  );
};

filteringButton.propTypes = {
  filteringOption: PropTypes.string.isRequired,
};

export default filteringButton;
