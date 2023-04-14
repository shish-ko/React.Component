import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPhotoData } from '../utils';

export const searchSlice = createSlice({
  name: 'searchValue',
  initialState: {
    value: '',
    owner: '',
  },
  reducers: {
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.value = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPhotoData.fulfilled, (state, action) => {
      state.owner = action.payload;
    });
  },
});

export const { setSearchValue } = searchSlice.actions;
