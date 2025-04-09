import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../../../types/models';

export const setFavoriteOffers = createAction<Offers>('offers/favoritesOffers');
