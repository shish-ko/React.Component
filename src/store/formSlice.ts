import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAccountCard } from 'src/interfaces';

const initialState: IAccountCard[] = [];

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    addAccount: (state, action: PayloadAction<IAccountCard>) => {
      state.push(action.payload);
    },
  },
});
