import * as toolkitRaw from '@reduxjs/toolkit';
const { combineReducers, configureStore } = ((toolkitRaw as any).default ??
  toolkitRaw) as typeof toolkitRaw;
// import { photoAPI } from '../features/photoAPI';
import { accountsSlice } from './formSlice';
import { searchSlice } from './searchSlice';

const reducers = combineReducers({
  accounts: accountsSlice.reducer,
  search: searchSlice.reducer,
  // api: photoAPI.reducer,
});

export const store = configureStore({
  reducer: reducers,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(photoAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
