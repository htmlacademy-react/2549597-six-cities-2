import { createAction } from '@reduxjs/toolkit';
import { AuthStatus, City, CurrentOffer, Offers, SortingSlice } from '../types/models';

export const changeTown = createAction('/changeTown', (value: City) => ({
  payload: value,
}));

export const offers = createAction('/offers');

export const setSorting = createAction('/sorting', (value: SortingSlice) => ({
  payload: value
}));

export const loadData = createAction<Offers>('data/loadData');

export const requireAuthorization = createAction<AuthStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('/setError');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

export const setCurrentOfferId = createAction<string | undefined>('offer/id');

export const setCurrentOffer = createAction<CurrentOffer | null>('offers/offer');
