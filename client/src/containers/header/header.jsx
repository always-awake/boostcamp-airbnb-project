import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/logo/logo.jsx';
import SerachBar from '../../components/searchBar/searchBar.jsx';

const Header = styled.header`
  display: flex;
  flex-display: row;
  align-items: center;
`;

const HeaderContainer = () => {
  return (
    <Header>
      <Logo />
      <SerachBar />
    </Header>
  );
};

export default HeaderContainer;
