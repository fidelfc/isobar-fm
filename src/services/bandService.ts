import axios from 'axios';
import { BandHTTPResponse } from './model/bandHTTPResponse';

const baseURL =
  'https://iws-brazil-labs-iws-recruiting-bands.iwsbrazil.io/api/bands';

export const getBandInfo = async (bandId: string | undefined) =>
  await axios
    .get<Promise<BandHTTPResponse>>(`${baseURL}/${bandId}`)
    .then((res) => res.data);
