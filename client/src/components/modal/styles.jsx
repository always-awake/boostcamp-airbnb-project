import styled from 'styled-components';

export const CountModal = styled.div`
  width: 360px;
  height: 300px;
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  position: absolute;
  background-color: #FFFFFF;
  margin: 10px 0 0 90px
  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 37px;
`;

export const CountModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px 0 15px;
  border-top: 1px solid #ECECEC
`;

export const CountSetting = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PriceModal = styled.div`
  width: 380px;
  height: 210px;
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  position: absolute;
  background-color: #FFFFFF;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 37px;
  margin: 10px 0 0 248px;
`;

export const PriceSliderTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #222222;
  width: 100%;
  align-items: center;
  margin-top: 20px;
`;

export const PriceSliderSubTitle = styled.div`
  font-size: 12px;
  color: #717171;
`;
