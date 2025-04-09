import { createSlice } from '@reduxjs/toolkit';
import { Offers } from '../../../types/models';
import { NameSpace } from '../../../constants';
import { setFavoriteOffers } from './favorites-offers-action';


export const favoriteOffersSlice = createSlice({
  name: NameSpace.FavoriteOffers,
  initialState: {
    favoriteOffers: [] as Offers,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setFavoriteOffers, (state, action) => {
        state.favoriteOffers = action.payload;
      });
  },
});
