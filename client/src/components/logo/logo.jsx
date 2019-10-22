import React from 'react';
import styled from 'styled-components';

const LOGO_IMG_PATH = '../../../assets/img/airbnb-logo.png';
const LOGO_IMG_ALT = 'airbnb-logo';

const logo = () => {
  const Logo = styled.div`
  height: 35px;
  weight: 35px;
  margin: 0 25px 0 25px;
  `;
  const LogoImg = styled.img`
  height: 100%;
  weight: 100%;
  `;

  return (
    <Logo>
      <LogoImg src={LOGO_IMG_PATH} alt={LOGO_IMG_ALT} />
    </Logo>
  );
};

export default logo;
