import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
import { PayloadAction } from '@reduxjs/toolkit';

import { fetchPhotoData, fetchPhotos } from '../features/photoAPI';
import { Photo, PhotoData } from '../interfaces/interfaces';

const initialState: {
  value: string;
  cards: Photo[];
  cardsIsLoading: boolean;
  dataIsLoading: boolean;
  photoData?: PhotoData;
} = {
  value: '',
  cards: [],
  cardsIsLoading: true,
  dataIsLoading: true,
};

export const searchSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.value = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.cards = action.payload.photos.photo;
        state.cardsIsLoading = false;
      })
      .addCase(fetchPhotos.pending, (state) => {
        state.cardsIsLoading = true;
      })
      .addCase(fetchPhotoData.fulfilled, (state, action) => {
        state.photoData = action.payload.photo;
        state.dataIsLoading = false;
      })
      .addCase(fetchPhotoData.pending, (state) => {
        state.dataIsLoading = true;
      });
  },
});

export const { setSearchValue } = searchSlice.actions;
