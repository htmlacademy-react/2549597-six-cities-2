import { createSelector } from '@reduxjs/toolkit';
import { CurrentOffer, Offers } from '../../../types/models';
import { State } from '../../../types/state';
import { NameSpace } from '../../../constants';

export const allOffers = (state: State) => state[NameSpace.Offers].offers;
const currentLoadingStatus = (state: State) => state[NameSpace.Offers].isOffersLoaded;
const currentOffer = (state: State) => state[NameSpace.Offers].currentOffer;
const currentCard = (state: State) => state[NameSpace.Offers].currentCard;

export const getErrorStatus = (state: State) => state[NameSpace.Offers].hasError;

export const getAllOffers = createSelector([allOffers], (allCurrentOffers: Offers) => allCurrentOffers);
export const favoriteOffers = createSelector([allOffers], (offersData: Offers) => offersData.filter((offer) => offer.isFavorite));
export const getCurrentOffer = createSelector([currentOffer], (offer: CurrentOffer) => offer);
export const getCurrentCardId = createSelector([currentCard], (card: string) => card);

export const getCurrentLoadingStatus = createSelector([currentLoadingStatus], (loadingStatus: boolean) => loadingStatus);

