import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { datatype, name, address, lorem, image, internet } from 'faker';
import { State } from './types/state';
import { createAPI } from './services/api';

export const cardId = datatype.uuid();

export const fakeLocation = {
  latitude: Number(address.latitude()),
  longitude: Number(address.longitude()),
  zoom: datatype.number(),
};

export const fakeCity = {
  name: address.cityName(),
  location: fakeLocation
};

export const fakeCurrentOffer = {
  id: datatype.uuid(),
  title: name.title(),
  type: name.jobType(),
  price: datatype.number(),
  city: fakeCity,
  location: fakeLocation,
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  rating: datatype.number(),
  description: datatype.string(),
  bedrooms: datatype.number(),
  goods: Array.from({ length: datatype.number() }, () => lorem.word()),
  host: {
    name: name.firstName(),
    avatarUrl: image.imageUrl(),
    isPro: datatype.boolean(),
  },
  images: Array.from({ length: datatype.number() }, () => image.imageUrl()),
  maxAdults: datatype.number(),
};

export const fakeError = lorem.text();

export const fakeOffer = () => ({
  id: datatype.uuid(),
  title: name.title(),
  type: name.jobType(),
  price: datatype.number(),
  city: fakeCity,
  location: fakeLocation,
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  rating: datatype.number(),
  previewImage: image.imageUrl(),
});

export const fakeOffers = Array.from({length: 10}, () => fakeOffer());

export const fakeReview = () => ({
  id: datatype.uuid(),
  date: datatype.datetime().toISOString(),
  user: {
    name: name.firstName(),
    avatarUrl: image.avatar(),
    isPro: datatype.boolean(),
  },
  comment: lorem.paragraph(),
  rating: datatype.number(),
});

export const fakeReviews = Array.from({length: 5}, () => fakeReview());

export const fakeUser = {
  name: name.firstName(),
  avatarUrl: image.imageUrl(),
  isPro: datatype.boolean(),
  email: internet.email(),
  token: datatype.uuid(),
};

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const fakeUserLogin = {
  login: internet.email(),
  password: datatype.string(),
};

export const fakeServerAnswer = {
  token: datatype.string(),
};

