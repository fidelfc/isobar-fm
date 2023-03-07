import axios from 'axios';
import { AlbumServiceHTTPResponse } from './model/albumServiceHTTPResponse';
const baseURL =
  'https://iws-brazil-labs-iws-recruiting-bands.iwsbrazil.io/api/albums';
export const getAlbumList = async () =>
  await axios
    .get<Promise<AlbumServiceHTTPResponse[]>>(baseURL)
    .then((res) => res.data);
