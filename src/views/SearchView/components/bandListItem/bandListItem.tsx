import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../constants/colors';

interface Props {
  imageUrl: string;
  bandName: string;
  numberOfPlays: number;
}
export const BandListItem = ({ bandName, imageUrl, numberOfPlays }: Props) => {
  return (
    <Container>
      <BandImage src={imageUrl} />
      <BandInfo>
        <BandName>{bandName}</BandName>
        <BandNumberOfPlays>{numberOfPlays} Plays</BandNumberOfPlays>
      </BandInfo>
    </Container>
  );
};

const BandImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  align-items: center;
  background-color: ${Colors.white};

  &:hover {
    background-color: ${Colors.lightGray};
  }
`;

const BandInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

const BandName = styled.p`
  color: ${Colors.black};
  font-weight: bold;
  font-size: 1.6rem;
  margin: 0 0 8px 0;
`;

const BandNumberOfPlays = styled.p`
  color: ${Colors.black};
  font-size: 1.2rem;
  margin: 0;
  font-weight: lighter;
`;
