import { createReducer } from '@reduxjs/toolkit';
import { offers, changeTown, changeOffers} from './action';
import { OFFERS_DATA } from '../mocks/offers';
import { CITYES } from '../constants';


const modifiedOffers = OFFERS_DATA.filter((offer) => offer.town === 'Paris');

const initialState = {
  town: CITYES[1],
  allTowns: CITYES,
  anotherOffers: OFFERS_DATA,
  modifiedOffers: modifiedOffers,
  fixedOffers: OFFERS_DATA,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(offers, (state) => {
      state.fixedOffers = OFFERS_DATA;
    })
    .addCase(changeOffers, (state, action) => {
      state.modifiedOffers = state.fixedOffers.filter((offer) => offer.town === action.payload);
    })
    .addCase(changeTown, (state, action) => {
      state.town = action.payload;
    });
});
