import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  image: string;
  numberOfTracks: number;
}
export const Album = ({ name, image, numberOfTracks }: Props) => {
  return (
    <Container data-testid={'album'} $background={image}>
      <InfoWrapper>
        <p>{name}</p>
        <p>{numberOfTracks} Tracks</p>
      </InfoWrapper>
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
`;

const InfoWrapper = styled.div`
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  width: 100%;
  font-size: 1rem;
`;
