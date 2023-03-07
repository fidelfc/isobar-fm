import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBandList } from '../../services/bandListService';
import { BandHTTPResponse } from '../../services/model/bandHTTPResponse';
import { Simulate } from 'react-dom/test-utils';
import change = Simulate.change;

export const useViewController = () => {
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

  return { changeValue, searchValue, bands, isLoading, filterBands };
};
