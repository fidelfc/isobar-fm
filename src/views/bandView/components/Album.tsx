import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  image: string;
  numberOfTracks: number;
}
export const Album = ({ name, image, numberOfTracks }: Props) => {
  return (
    <Container $background={image}>
      <div>{name}</div>
      <div>{numberOfTracks} Tracks</div>
    </Container>
  );
};

interface ContainerProps {
  $background?: string;
}
const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.$background});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 8px;
`;
