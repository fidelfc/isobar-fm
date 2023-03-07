import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getBandInfo } from '../../services/bandService';
import { getAlbumList } from '../../services/albumListService';
import { useEffect, useState } from 'react';
import { AlbumServiceHTTPResponse } from '../../services/model/albumServiceHTTPResponse';

export const useViewController = () => {
  const { bandId } = useParams();
  const { isLoading: bandLoading, data: bandRes } = useQuery({
    queryKey: ['band', bandId],
    queryFn: () => getBandInfo(bandId)
  });
  const { isLoading: albumLoading, data: albumRes } = useQuery({
    queryKey: ['albums'],
    queryFn: getAlbumList
  });

  const [expandDescription, setExpandedDescription] = useState<boolean>(false);
  const [bandAlbums, setBandAlbums] = useState<AlbumServiceHTTPResponse[]>([]);
  const getBandAlbums = (
    bandAlbums: string[],
    albums: AlbumServiceHTTPResponse[]
  ) => bandAlbums?.map((album) => albums?.find((item) => item.id === album));
  const toggleExpanded = () => {
    setExpandedDescription((prevState) => !prevState);
  };

  useEffect(() => {
    if (bandRes && albumRes) {
      const filteredAlbums = getBandAlbums(bandRes.albums, albumRes);
      setBandAlbums(filteredAlbums as AlbumServiceHTTPResponse[]);
    }
  }, [bandRes, albumRes]);

  const isLoading = albumLoading || bandLoading;

  return {
    isLoading,
    bandAlbums,
    bandRes,
    toggleExpanded,
    expandDescription
  };
};
