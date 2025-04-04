import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CurrentOffer, Offers } from '../../../types/models';
import { fetchOfferAction, getDataCurrentOffer } from '../../api-actions';
import { NameSpace } from '../../../constants';


export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState: {
    offers: [] as Offers,
    isOffersLoaded: false,
    currentOffer: {} as CurrentOffer,
    hasError: false,
    isCurrentOfferLoaded: false,
    hasCurrentOfferError: false,
    currentCard: '',
  },
  reducers: {
    setCurrentCardId: (state, action: PayloadAction<string>) => {
      state.currentCard = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOffersLoaded = true;
        state.hasError = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoaded = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isOffersLoaded = false;
        state.hasError = true;
      })
      .addCase(getDataCurrentOffer.pending, (state) => {
        state.isCurrentOfferLoaded = true;
        state.hasCurrentOfferError = false;
      })
      .addCase(getDataCurrentOffer.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.hasCurrentOfferError = false;
      })
      .addCase(getDataCurrentOffer.rejected, (state) => {
        state.isCurrentOfferLoaded = false;
        state.hasCurrentOfferError = true;
      });
  },
});

export const {setCurrentCardId} = offersSlice.actions;
