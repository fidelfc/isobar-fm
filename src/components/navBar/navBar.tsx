import React from 'react';
import styled from 'styled-components';

type Props = {
  children?: React.ReactNode;
};
export const NavBar = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  background-color: orangered;
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 12px 24px;
  position: sticky;
  top: 0;
`;
