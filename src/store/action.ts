import { createAction } from '@reduxjs/toolkit';
import { City, CurrentOffer, Offers, Reviews, SortTypes, UserData } from '../types/models';
import { AppRoute, AuthorizationStatus } from '../constants';

export const changeTown = createAction<City>('/changeTown');

export const setSorting = createAction<SortTypes>('/sorting');

export const loadData = createAction<Offers>('data/loadData');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('/setError');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

export const setCurrentOfferId = createAction<string | undefined>('offer/id');

export const setCurrentOffer = createAction<CurrentOffer>('offers/offer');

export const setReviews = createAction<Reviews>('offers/reviews');

export const setUserData = createAction<UserData>('user/setData');

export const dropUserData = createAction('user/dropData');

export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');
