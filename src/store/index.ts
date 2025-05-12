import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { offers } from './slices/offers/offers';
import { town } from './slices/town/town';
import { sorting } from './slices/sorting/sorting';
import { createAPI } from '../services/api';
import { auth } from './slices/auth/auth';
import { user } from './slices/user/user';
import { redirect } from './middlewares/redirect';
import { NameSpace } from '../constants';
import { reviews } from './slices/review/reviews';
import { currentOffer } from './slices/current-offer/current-offer';
import { currentCard } from './slices/current-card/current-card';
import { favoriteOffers } from './slices/favorite-offers/favorite-offers';

const api = createAPI();

export const createRootReducer = combineReducers({
  [NameSpace.Offers]: offers.reducer,
  [NameSpace.Town]: town.reducer,
  [NameSpace.Sorting]: sorting.reducer,
  [NameSpace.Auth]: auth.reducer,
  [NameSpace.User]: user.reducer,
  [NameSpace.Review]: reviews.reducer,
  [NameSpace.CurrentOffer]: currentOffer.reducer,
  [NameSpace.CurrentCard]: currentCard.reducer,
  [NameSpace.FavoriteOffers]: favoriteOffers.reducer,
});

export const store = configureStore({
  reducer: createRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    }).concat(redirect)
});
