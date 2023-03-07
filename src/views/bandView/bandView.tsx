import React from 'react';
import styled from 'styled-components';
import PlusIcon from '../../assets/add.png';
import MinusIcon from '../../assets/minus.png';
import { Album } from './components/album/Album';
import { useViewController } from './BandViewController';
import { Loader } from '../../components/loader/loader';
import { NavBar } from '../../components/navBar/navBar';
import IsobarLogo from '../../assets/logo.png';
import BackButton from '../../assets/back.png';
import { Link } from 'react-router-dom';

export const BandView = () => {
  const { bandAlbums, isLoading, bandRes, toggleExpanded, expandDescription } =
    useViewController();

  const AlbumList = bandAlbums.map((album) => (
    <Album
      key={album.id}
      name={album.name}
      image={album.image}
      numberOfTracks={album.tracks.length}
    />
  ));

  return (
    <FullWidthColumn>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <NavBar>
            <NavBarLayout>
              <Link to={'/'}>
                <BackImg src={BackButton} alt={'back-button'} />
              </Link>
              <LogoImg src={IsobarLogo} alt={'isobar-logo'} />
            </NavBarLayout>
          </NavBar>
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
      )}
    </FullWidthColumn>
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

const FullWidthColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 32px;
`;

const NavBarLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const BackImg = styled.img`
  height: 24px;
`;

const LogoImg = styled.img`
  width: 75px;
`;
