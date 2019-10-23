import React from 'react';
import * as S from './styles.jsx';
import Logo from '../../../components/logo/logo.jsx';
import SerachBar from '../../../components/searchBar/searchBar.jsx';

const Header = () => {
  return (
    <S.Header>
      <Logo />
      <SerachBar />
    </S.Header>
  );
};

export default Header;
