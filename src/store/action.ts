import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/types';

export const changeTown = createAction('/changeTown', (value: City) => ({
  payload: value,
}));

export const offers = createAction('/offers');

export const changeOffers = createAction('/changeOffers', (value: string) => ({
  payload: value,
}));
