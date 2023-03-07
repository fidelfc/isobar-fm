import React from 'react';
import { BandListItem } from './components/bandListItem';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Search } from './components/search';
import { useViewController } from './searchViewController';

export const SearchView = () => {
  const { searchValue, changeValue, bands, filterBands, isLoading } =
    useViewController();
  const bandList = bands.map((band) => (
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
      <Search
        searchFunction={filterBands}
        changeFunction={changeValue}
        value={searchValue}
      />
      <ListView>{bandList}</ListView>
    </div>
  );
};

const ListView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
