import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;
import { PayloadAction } from '@reduxjs/toolkit';

import { fetchPhotos } from '../features/photoAPI';
import { Photo, PhotoData } from '../interfaces';

const initialState: {
  value: string;
  cards: Photo[];
  cardsIsLoading: boolean;
  photoData?: PhotoData;
} = {
  value: '',
  cards: [],
  cardsIsLoading: false,
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
      });
  },
});

export const { setSearchValue } = searchSlice.actions;
