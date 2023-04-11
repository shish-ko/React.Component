import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { accountsSlice } from './formSlice';
import { searchSlice } from './searchSlice';

const reducers = combineReducers({
  accounts: accountsSlice.reducer,
  search: searchSlice.reducer,
});

const store = configureStore({
  reducer: reducers,
});
