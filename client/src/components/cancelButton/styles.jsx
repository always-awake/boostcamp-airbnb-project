import styled from 'styled-components';

export const CancelButton = styled.div`
  display: flex;
  flex-display: row;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 35px;
  text-decoration: underline;
  color: #222222;
  font-size: 15px
  border-radius: 5px;
  
  &:hover {
    background-color: #D9D9D9;
    cursor: pointer;
  }
`;
