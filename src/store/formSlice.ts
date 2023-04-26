import { PayloadAction } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;
import { IAccountCard } from 'src/interfaces/interfaces';

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
