import { createSlice } from '@reduxjs/toolkit';
// import { OFFERS_DATA } from '../mocks/offers';
// import { offers, loadData } from './action';
import { loadData } from './action';
import { Offers } from '../types/models';


export const offersSlice = createSlice({
  name: 'offers',
  initialState: {
    offers: [] as Offers,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(offers, (state) => {
      //   state.offers = OFFERS_DATA;
      // })
      .addCase(loadData, (state, action) => {
        state.offers = action.payload;
      });
  },
});
