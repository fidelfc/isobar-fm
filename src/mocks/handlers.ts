import { rest } from 'msw';
export const handlers = [
  rest.get(
    'https://iws-brazil-labs-iws-recruiting-bands.iwsbrazil.io/api/bands',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            name: 'Test band',
            image: 'url',
            genre: 'Rock',
            biography: 'Biography',
            albums: [],
            numPlays: 1000,
            id: '001'
          },
          {
            name: 'Test band 2',
            image: 'url2',
            genre: 'Jazz',
            biography: 'Biography pf band 2',
            albums: [],
            numPlays: 10020,
            id: '002'
          }
        ])
      );
    }
  ),
  rest.get(
    'https://iws-brazil-labs-iws-recruiting-bands.iwsbrazil.io/api/bands/:bandId',
    (req, res, ctx) => {
      return res(
        ctx.json({
          name: 'Test band 1',
          image: 'url',
          genre: 'rock',
          biography: 'A biography',
          albums: ['001', '002'],
          numPlays: 9001,
          id: '001'
        })
      );
    }
  ),
  rest.get(
    'https://iws-brazil-labs-iws-recruiting-bands.iwsbrazil.io/api/albums',
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            name: 'Album 001',
            image: 'url',
            releaseDate: '2018',
            band: 'Band test 1',
            id: '001',
            tracks: ['a track', 'b track']
          },

          {
            name: 'Album 002',
            image: 'url',
            releaseDate: '2077',
            band: 'Band test 1',
            id: '002',
            tracks: ['a track', 'b track', 'c track']
          },

          {
            name: 'Album 001',
            image: 'url',
            releaseDate: '2018',
            band: 'Band test 2',
            id: '003',
            tracks: ['a track', 'b track']
          }
        ])
      );
    }
  )
];
