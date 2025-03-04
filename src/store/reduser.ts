import {createSelector, createSlice } from '@reduxjs/toolkit';
import {offers, changeTown, setSorting} from './action';
import { OFFERS_DATA } from '../mocks/offers';
import { CITIES, SORT_TYPES } from '../constants';
import { City, Offers, CommonSlice, Sort } from '../types/models';
import { getPopularOffers, getPriceHighToLowOffers, getPriceLowToHighOffers, getTopRatingOffers } from '../utils';


export const townsSlice = createSlice({
  name: 'towns',
  initialState: {
    currentCity: CITIES[1],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeTown, (state, action) => {
        state.currentCity = action.payload;
      });
  }
});

export const offersSlice = createSlice({
  name: 'offers',
  initialState: {
    offers: OFFERS_DATA,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(offers, (state) => {
        state.offers = OFFERS_DATA;
      });
  },
});

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState: {
    sorting: SORT_TYPES[0],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setSorting, (state, action) => {
        state.sorting = action.payload;
      });
  },
});

const currentCityName = (state: CommonSlice) => state.towns.currentCity.name;
const allOffers = (state: CommonSlice) => state.offers.offers;
const currentCity = (state: CommonSlice) => state.towns.currentCity;
const currentSort = (state: CommonSlice) => state.sorting.sorting;

export const getCityName = createSelector([currentCityName], (name: string) => name);
export const changeOffers = createSelector([currentCityName, allOffers, currentSort], (name: string, offersData: Offers, sort: Sort) => {
  switch (sort.name) {
    case 'Popular':
      return getPopularOffers(offersData, name);
    case 'Price: low to high':
      return getPriceLowToHighOffers(getPopularOffers(offersData, name));
    case 'Price: high to low':
      return getPriceHighToLowOffers(getPopularOffers(offersData, name));
    case 'Top rated first':
      return getTopRatingOffers(getPopularOffers(offersData, name));
    default:
      return getPopularOffers(offersData, name);
  }
});
export const getCity = createSelector([currentCity], (city: City) => city);
export const getAllOffers = createSelector([allOffers], (allCurrentOffers: Offers) => allCurrentOffers);
export const favoriteOffers = createSelector([allOffers], (offersData: Offers) => offersData.filter((offer) => offer.isBookmarks));
export const getCurrentSort = createSelector([currentSort], (sort: Sort) => sort);

