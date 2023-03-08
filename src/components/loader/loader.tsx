import styled, { keyframes } from 'styled-components';
import React from 'react';
import { Devices } from '../../constants/devices';

export const Loader = () => {
  return (
    <CenteredLoader data-testid={'loader'}>
      <Spinner />
    </CenteredLoader>
  );
};

const rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  width: 48px;
  height: 48px;
  border: 5px solid white;
  border-bottom-color: orange;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;

  @media (min-width: ${Devices.desktop}) {
    width: 64px;
    height: 64px;
  }
`;

const CenteredLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
`;
