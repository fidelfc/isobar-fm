import React from 'react';
import noResultsImage from '../../../../assets/no_results.png';
import styled from 'styled-components';
export const NoResults = () => {
  return (
    <Container>
      <Title>No Results</Title>
      <Image src={noResultsImage} alt={'no-results-image'} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
`;
const Title = styled.h3`
  color: gray;
  font-size: 2.2rem;
  margin-bottom: 12px;
`;
const Image = styled.img`
  width: 40px;
  height: auto;
`;
