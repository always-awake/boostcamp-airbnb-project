import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/logo/logo.jsx';
import SerachBar from '../../components/searchBar/searchBar.jsx';

const HeaderContainer = () => {
  const Header = styled.header`
  display: flex;
  flex-display: row;
  align-items: center;
  `;
  
  return (
    <Header>
      <Logo />
      <SerachBar />
    </Header>
  );
};

export default HeaderContainer;
