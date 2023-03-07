import React from 'react';
import styled from 'styled-components';
import IsobarLogo from '../../assets/logo.png';

export const Logo = () => {
  return <LogoImg src={IsobarLogo} alt={'isobar-logo'} />;
};

const LogoImg = styled.img`
  width: 75px;
`;
