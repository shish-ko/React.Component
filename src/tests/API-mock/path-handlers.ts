import { API_RESPONSE } from '../../data/testApiData';
import { rest } from 'msw';
import { PHOTO_DATA_RES } from '../../data/testPhotoData';
import { USER_SEARCH_VALUE } from '../../data/constants';
import { API_SEARCH_RESPONSE } from '../../data/testApiSearchRes';

export const pathHandlers = [
  rest.get('*/rest/*', (req, res, ctx) => {
    const method = req.url.searchParams.get('method');
    const tag = req.url.searchParams.get('tags');
    if (method === 'flickr.photos.getInfo') return res(ctx.status(300), ctx.json(PHOTO_DATA_RES));
    if (tag === USER_SEARCH_VALUE) return res(ctx.status(300), ctx.json(API_SEARCH_RESPONSE));
    return res(ctx.status(300), ctx.json(API_RESPONSE));
  }),
];
