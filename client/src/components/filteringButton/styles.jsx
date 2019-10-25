import styled from 'styled-components';

export const FilteringButton = styled.button`
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
  font-size: 14px;
  outline: none;

  &:hover {
    border: 1px solid #222222;
    background-color: #F2F2F2;
    cursor: pointer;
  }

  &:focus {
    border: 1px solid #222222;
  }
`;
