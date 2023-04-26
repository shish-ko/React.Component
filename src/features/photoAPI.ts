import { IPhotoDataResp, Root } from '../interfaces/interfaces';
import { API_KEY } from '../data/constants';
import * as toolkitRaw from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { createAsyncThunk } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;

export const fetchPhotos = createAsyncThunk('searchValue', async (searchValue: string) => {
  const res = await fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${searchValue}&safe_search&extras=url_m&format=json&nojsoncallback=1&per_page=20`
  );
  const data: Root = await res.json();
  return data;
});

export const fetchPhotoData = createAsyncThunk('fetchPhotoData', async (id: string) => {
  const response = await fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=7f186c5d957a329557c371dc86a52bd1&photo_id=${id}&format=json&nojsoncallback=1`
  );
  const data: IPhotoDataResp = await response.json();
  return data;
});

// export const photoAPI = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://www.flickr.com/' }),
//   endpoints: (builder) => ({
//     getPhotos: builder.query<Root, string>({
//       query: (searchParam: string) => ({
//         url: 'services/rest/',
//         params: {
//           method: 'flickr.photos.search',
//           api_key: API_KEY,
//           tags: searchParam,
//           extras: 'url_m',
//           format: 'json',
//           nojsoncallback: '1',
//           per_page: '20',
//         },
//       }),
//     }),
//     getPhotoData: builder.query<IPhotoDataResp, string>({
//       query: (photoId: string) => ({
//         url: 'services/rest/',
//         params: {
//           method: 'flickr.photos.getInfo',
//           api_key: API_KEY,
//           photo_id: photoId,
//           format: 'json',
//           nojsoncallback: '1',
//         },
//       }),
//     }),
//   }),
// });
