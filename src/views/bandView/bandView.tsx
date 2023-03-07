import React from 'react';
import styled from 'styled-components';
import PlusIcon from '../../assets/add.png';
import MinusIcon from '../../assets/minus.png';
import { Album } from './components/Album';
import { useViewController } from './BandViewController';

export const BandView = () => {
  const {
    bandAlbums,
    bandLoading,
    albumLoading,
    bandRes,
    toggleExpanded,
    expandDescription
  } = useViewController();

  const AlbumList = bandAlbums.map((album) => (
    <Album
      key={album.id}
      name={album.name}
      image={album.image}
      numberOfTracks={album.tracks.length}
    />
  ));

  return (
    <>
      <Background $background={bandRes?.image} />
      <Layout>
        <BandInfo>
          <Info>{bandRes?.genre}</Info>
          <BandImage src={bandRes?.image} />
          <Info>{bandRes?.numPlays} Plays</Info>
        </BandInfo>
        <DescriptionWrapper>
          <Description $expanded={expandDescription}>
            {bandRes?.biography}
          </Description>
          <img
            onClick={toggleExpanded}
            src={expandDescription ? MinusIcon : PlusIcon}
            alt={expandDescription ? 'minus-icon' : 'plus-icon'}
          />
        </DescriptionWrapper>
        <Title>Albums</Title>
        <AlbumContainer>{AlbumList}</AlbumContainer>
      </Layout>
    </>
  );
};

interface BackgroundProps {
  $background?: string;
}
const Background = styled.div<BackgroundProps>`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.$background});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 18px;
`;

const BandInfo = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 30% 40% 30%;
  width: 100%;
  transform: translateY(-35px);
`;

const Info = styled.h4`
  color: darkgray;
  font-size: 14px;
`;

const BandImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

interface DescriptionProps {
  $expanded: boolean;
}

const DescriptionWrapper = styled.div`
  position: relative;
  img {
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 15px;
    height: 15px;
    transform: translateX(-50%);
  }
`;
const Description = styled.div<DescriptionProps>`
  max-height: ${(props) => (props.$expanded ? '100%' : '100px')};
  overflow: hidden;
  width: 100%;
  position: relative;

  :after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 50%;
    bottom: 0;
    background: ${(props) =>
      props.$expanded
        ? 'unset'
        : ' linear-gradient(180deg, rgba(139,167,32,0) 0%, rgba(255,255,255,1) 100%);'};
    pointer-events: none;
  }
`;

const AlbumContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-template-rows: auto;
  grid-auto-rows: auto;
  justify-content: center;
  justify-items: center;
`;

const Title = styled.h3`
  font-size: 16px;
  color: black;
  font-weight: bold;
  margin: 24px 0;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`;
