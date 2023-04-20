import * as toolkitRaw from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { combineReducers, configureStore } = ((toolkitRaw as any).default ??
  toolkitRaw) as typeof toolkitRaw;
import { accountsSlice } from './formSlice';
import { searchSlice } from './searchSlice';

const reducers = combineReducers({
  accounts: accountsSlice.reducer,
  search: searchSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
