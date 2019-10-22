import React from 'react';
import styled from 'styled-components';
import Logo from '../../../components/logo/logo.jsx';
import SerachBar from '../../../components/searchBar/searchBar.jsx';

const header = () => {
  const Header = styled.header`
  display: flex;
  flex-display: row;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
  `;

  return (
    <Header>
      <Logo />
      <SerachBar />
    </Header>
  );
};

export default header;
