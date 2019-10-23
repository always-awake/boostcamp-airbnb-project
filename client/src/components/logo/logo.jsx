import React from 'react';
import * as S from './styles.jsx';

const Logo = () => {
  const LOGO_IMG_PATH = '../../../assets/img/airbnb-logo.png';
  const LOGO_IMG_ALT = 'airbnb-logo';

  return (
    <S.Logo>
      <S.LogoImg src={LOGO_IMG_PATH} alt={LOGO_IMG_ALT} />
    </S.Logo>
  );
};

export default Logo;
