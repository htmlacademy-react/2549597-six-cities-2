import { createAction } from '@reduxjs/toolkit';
import { City, Offers, SortingSlice } from '../types/models';
import { AuthorizationStatus } from '../constants';

export const changeTown = createAction('/changeTown', (value: City) => ({
  payload: value,
}));

export const offers = createAction('/offers');

export const setSorting = createAction('/sorting', (value: SortingSlice) => ({
  payload: value
}));

export const loadData = createAction<Offers>('data/loadData');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

// export const changeAuthStatus = createAction('/auth', (value: AuthorizationStatus) => ({
//   payload: value
// }));
