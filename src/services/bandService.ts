import axios from 'axios';

const baseURL =
  'https://iws-brazil-labs-iws-recruiting-bands.iwsbrazil.io/api/bands';

export const getBandInfo = async (bandId: string | undefined) =>
  await axios.get(`${baseURL}/${bandId}`).then((res) => res.data);
