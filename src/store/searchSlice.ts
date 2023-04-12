import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'searchValue',
  initialState: {
    value: '',
  },
  reducers: {
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.value = payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;
