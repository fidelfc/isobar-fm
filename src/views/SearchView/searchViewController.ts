import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBandList } from '../../services/bandListService';
import { BandHTTPResponse } from '../../services/model/bandHTTPResponse';
import { Simulate } from 'react-dom/test-utils';
export const useViewController = () => {
  const { isLoading, data: bandListRes } = useQuery({
    queryKey: ['bandList'],
    queryFn: getBandList
  });

  const [bands, setBands] = useState<BandHTTPResponse[]>([]);

  useEffect(() => {
    if (bandListRes) {
      setBands(bandListRes);
    }
  }, [bandListRes]);

  return {
    bands,
    isLoading
  };
};

type SortConfig = {
  key: keyof BandHTTPResponse;
  direction: 'ascending' | 'descending';
};

export const useSortableData = (
  items: BandHTTPResponse[],
  config: SortConfig | null = null
) => {
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: keyof BandHTTPResponse) => {
    if (sortConfig && sortConfig.key === key) {
      setSortConfig({
        ...sortConfig,
        direction:
          sortConfig.direction === 'ascending' ? 'descending' : 'ascending'
      });
    } else {
      setSortConfig({ key, direction: 'ascending' });
    }
  };

  return { items: sortedItems, requestSort, sortConfig };
};

export const useFilterData = (
  items: BandHTTPResponse[],
  filterText: string | null = null
) => {
  const [filter, setFilter] = useState<string | null>(filterText);
  const [filteredItems, setFilteredItems] = useState<BandHTTPResponse[]>(items);

  const handleFilter = useCallback(() => {
    if (filter !== null) {
      const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredItems(filteredItems);
    } else {
      setFilteredItems(items);
    }
  }, [items, filter]);

  const requestFilter = (text: string | null) => {
    setFilter(text);
  };

  useEffect(() => {
    handleFilter();
  }, [handleFilter]);

  return { items: filteredItems, requestFilter, filter, handleFilter };
};
