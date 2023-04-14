import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPhotoDataResp, Root } from '../interfaces';
import { API_KEY } from '../data/constants';

export const photoAPI = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.flickr.com/' }),
  endpoints: (builder) => ({
    getPhotos: builder.query<Root, string>({
      query: (searchParam: string) => ({
        url: 'services/rest/',
        params: {
          method: 'flickr.photos.search',
          api_key: API_KEY,
          tags: searchParam,
          extras: 'url_m',
          format: 'json',
          nojsoncallback: '1',
          per_page: '20',
        },
      }),
    }),
    getPhotoData: builder.query<IPhotoDataResp, string>({
      query: (photoId: string) => ({
        url: 'services/rest/',
        params: {
          method: 'flickr.photos.getInfo',
          api_key: API_KEY,
          photo_id: photoId,
          format: 'json',
          nojsoncallback: '1',
        },
      }),
    }),
  }),
});
