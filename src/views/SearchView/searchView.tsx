import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBandList } from '../../services/bandListService';
import { BandListItem } from './components/bandListItem';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Search } from './components/search';
import { BandHTTPResponse } from '../../services/model/bandHTTPResponse';

export const SearchView = () => {
  const { isLoading, data: bandListRes } = useQuery({
    queryKey: ['bandList'],
    queryFn: getBandList
  });

  const [searchValue, setSearchValue] = useState<string>('');
  const [bands, setBands] = useState<BandHTTPResponse[]>([]);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filterBands = (value: string) => {
    if (bandListRes) {
      if (value.length === 0) {
        setBands(bandListRes);
      } else {
        setBands(
          bandListRes.filter((band) =>
            band.name.toLowerCase().includes(value.toLowerCase())
          )
        );
      }
    }
  };

  useEffect(() => {
    if (bandListRes) {
      setBands(bandListRes);
    }
  }, [bandListRes]);

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
  row-gap: 8px;
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
