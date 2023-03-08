import React from 'react';
import { BandListItem } from './components/bandListItem/bandListItem';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SearchInput } from './components/searchBar/searchInput';
import { useViewController } from './searchViewController';
import { NoResults } from './components/noResults/noResults';
import { Loader } from '../../components/loader/loader';
import { NavBar } from '../../components/navBar/navBar';
import { Logo } from '../../components/logo/Logo';
import { Devices } from '../../constants/devices';

export const SearchView = () => {
  const {
    searchValue,
    changeValue,
    bands,
    filterBands,
    isLoading,
    hasResults
  } = useViewController();
  const bandList =
    bands.length &&
    bands.map((band) => (
      <StyledLink key={band.id} to={`band/${band.id}`}>
        <BandListItem
          imageUrl={band.image}
          bandName={band.name}
          numberOfPlays={band.numPlays}
        />
      </StyledLink>
    ));

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <NavBar>
            <NavBarLayout>
              <SearchInput
                searchFunction={filterBands}
                changeFunction={changeValue}
                value={searchValue}
              />
              <Logo />
            </NavBarLayout>
          </NavBar>
          <ListView>{hasResults ? bandList : <NoResults />}</ListView>
        </>
      )}
    </div>
  );
};

const ListView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 18px;
  @media (min-width: ${Devices.desktop}) {
    padding: 0 24px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const NavBarLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
