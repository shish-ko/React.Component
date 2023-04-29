import * as toolkitRaw from '@reduxjs/toolkit';
const { combineReducers, configureStore } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
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
