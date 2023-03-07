import axios from 'axios';
import { BandListHTTPResponse } from './model/bandListHTTPResponse';

const baseURL =
  'https://iws-brazil-labs-iws-recruiting-bands.iwsbrazil.io/api/bands';
export const getBandList = async () => {
  return await axios
    .get<Promise<BandListHTTPResponse[]>>(baseURL)
    .then((res) => res.data);
};
