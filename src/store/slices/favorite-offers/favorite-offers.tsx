import { createSlice } from '@reduxjs/toolkit';
import { Offers } from '../../../types/models';
import { NameSpace } from '../../../constants';
import { setFavoriteOffer, setFavoriteOffers } from './actions';
import { removeFavoriteOffer } from '../../../utils';


export const favoriteOffers = createSlice({
  name: NameSpace.FavoriteOffers,
  initialState: {
    favoriteOffers: [] as Offers,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setFavoriteOffers, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(setFavoriteOffer, (state, action) => {
        state.favoriteOffers = removeFavoriteOffer(state.favoriteOffers, action.payload);
      });
  },
});
