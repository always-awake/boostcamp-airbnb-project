import styled from 'styled-components';

export const CountButtonSet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
  margin: 30px 20px 35px 20px;
`;

export const CountButton = styled.button`
  outline: none;
  width: 32px;
  height: 32px;
  border: 1px solid #B0B0B0;
  border-radius: 50%;
  color: #B0B0B0;
  font-size: 15px;
  
  &:hover {
    border: 1px solid #222222;
    color: #222222;
    cursor: pointer;
  }
`;

export const CountTitle = styled.div`
  margin-right: 50px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CountSubTitle = styled.div`
  font-size: 12px;
`;

export const CountButtonSetWrapper = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: row;
`;

export const CountText = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: center; 
  width: 40px;
`;
