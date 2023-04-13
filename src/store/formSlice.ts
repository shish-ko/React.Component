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
    deleteAccount: (state, action: PayloadAction<string>) => {
      return state.filter((i) => i.key !== action.payload);
    },
    clearAccountList: (state) => {
      state.length = 0;
    },
  },
});

export const { addAccount, deleteAccount, clearAccountList } = accountsSlice.actions;
