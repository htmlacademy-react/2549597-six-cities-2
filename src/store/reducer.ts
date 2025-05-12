import { createSelector } from '@reduxjs/toolkit';
import { CurrentOffer, Offers, SortTypes } from '../types/models';
import { sortingTypes } from '../utils';
import { takeCurrentCityName } from './slices/town/selectors';
import { takeCurrentSort } from './slices/sorting/selectors';
import { takeAllOffers } from './slices/offers/selectors';
import { takeCurrentOffer } from './slices/current-offer/selectors';
import { SORTING_TYPES } from '../constants';

export const getSortedOffers = createSelector([takeCurrentCityName, takeAllOffers, takeCurrentSort], (name: string, offersData: Offers, sort: SortTypes) => {
  const popularOffers = sortingTypes.popularOffers(offersData, name);

  switch (sort) {
    case SORTING_TYPES.Popular:
      return popularOffers;
    case SORTING_TYPES.PriceLowToHigh:
      return sortingTypes.priceLowToHighOffers(popularOffers);
    case SORTING_TYPES.PriceHighToLow:
      return sortingTypes.priceHighToLowOffers(popularOffers);
    case SORTING_TYPES.TopRatedFirst:
      return sortingTypes.topRatingOffers(popularOffers);
    default:
      return popularOffers;
  }
});

export const getOffer = createSelector([takeAllOffers, takeCurrentOffer], (offers: Offers, offerCurrent: CurrentOffer) => offers.find((offer) => offer.id === offerCurrent.id));
