import React from 'react';
import { BandListItem } from './components/bandListItem/bandListItem';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SearchInput } from './components/searchBar/searchInput';
import {
  useFilterData,
  useSortableData,
  useViewController
} from './searchViewController';
import { NoResults } from './components/noResults/noResults';
import { Loader } from '../../components/loader/loader';
import { NavBar } from '../../components/navBar/navBar';
import { Logo } from '../../components/logo/Logo';
import { Devices } from '../../constants/devices';
import { Order } from './components/order/Order';

export const SearchView = () => {
  const { bands, isLoading } = useViewController();

  const {
    items: sortedItems,
    requestSort,
    sortConfig
  } = useSortableData(bands);
  const {
    items: filteredItems,
    filter,
    requestFilter,
    handleFilter
  } = useFilterData(sortedItems);

  const bandList =
    filteredItems.length &&
    filteredItems.map((band) => (
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
                searchFunction={handleFilter}
                changeFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
                  requestFilter(e.target.value)
                }
                value={filter || ''}
              />
              <Logo />
            </NavBarLayout>
          </NavBar>
          <ListView>
            <Order
              orderFunction={requestSort}
              sortConfigKey={sortConfig?.key}
            />
            {!!filteredItems.length ? bandList : <NoResults />}
          </ListView>
        </>
      )}
    </div>
  );
};

const ListView = styled.div`
  display: flex;
  position: relative;
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
