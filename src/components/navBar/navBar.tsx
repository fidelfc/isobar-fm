import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../constants/colors';
import { Devices } from '../../constants/devices';

type Props = {
  children?: React.ReactNode;
};
export const NavBar = ({ children }: Props) => {
  return <Container data-testid={'navbar'}>{children}</Container>;
};

const Container = styled.div`
  background-color: ${Colors.orange};
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 12px 24px;
  position: sticky;
  top: 0;

  @media (min-width: ${Devices.desktop}) {
    padding: 12px 36px;
  }
`;
