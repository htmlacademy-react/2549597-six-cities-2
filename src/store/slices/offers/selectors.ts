import { createSelector } from '@reduxjs/toolkit';
import { Offers } from '../../../types/models';
import { State } from '../../../types/state';
import { NameSpace } from '../../../constants';

export const takeAllOffers = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].offers;
const takeCurrentLoadingStatus = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].isOffersLoaded;
export const getErrorStatus = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].hasError;

export const getAllOffers = createSelector([takeAllOffers], (allCurrentOffers: Offers) => allCurrentOffers);
export const getFavoriteOffers = createSelector([takeAllOffers], (offersData: Offers) => offersData.filter((offer) => offer.isFavorite));
export const getCurrentLoadingStatus = createSelector([takeCurrentLoadingStatus], (loadingStatus: boolean) => loadingStatus);
