import { configureStore } from '@reduxjs/toolkit';
import { offersSlice } from './offers-slice';
import { townsSlice } from './town-slice';
import { sortingSlice } from './sorting-slice';
import { createAPI } from '../services/api';
import { authSlice } from './auth-slice';


const api = createAPI();

export const store = configureStore({
  reducer: {
    offers: offersSlice.reducer,
    towns: townsSlice.reducer,
    sorting: sortingSlice.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    })
});
