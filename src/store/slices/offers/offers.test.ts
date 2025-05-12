import { Offers } from '../../../types/models';
import { offers } from './offers';
import { fetchOfferAction } from '../../api-actions';
import { fakeOffers } from '../../../test/mock';
import { replaceOffer } from './actions';

describe('Offers slice', () => {
  const state = {
    hasError: false,
    offers: [] as Offers,
    isOffersLoaded: false,
  };

  it ('should return initial state with empty action', () => {
    const emptyAction = { type: '' };

    const result = offers.reducer(state, emptyAction);

    expect(result).toEqual(state);
  });

  it ('should return initial state with undefined action', () => {
    const emptyAction = { type: '' };

    const result = offers.reducer(undefined, emptyAction);

    expect(result).toEqual(state);
  });

  it ('should set key isOffersLoaded is true', () => {
    const expectedState = true;

    const result = offers.reducer(state, fetchOfferAction.pending);

    expect(result.isOffersLoaded).toBe(expectedState);
  });

  it ('should set key isOffersLoaded is true and set key offers is Offers[]', () => {
    const initialState = {
      hasError: false,
      offers: [] as Offers,
      isOffersLoaded: true,
    };
    const expectedState = {
      hasError: false,
      offers: fakeOffers,
      isOffersLoaded: false,
    };

    const result = offers.reducer(initialState, fetchOfferAction.fulfilled(fakeOffers,'', undefined));

    expect(result).toEqual(expectedState);
  });

  it ('should set key isOffersLoaded is false', () => {
    const initialState = {
      hasError: false,
      offers: [] as Offers,
      isOffersLoaded: true,
    };
    const expectedState = {
      hasError: true,
      offers: [] as Offers,
      isOffersLoaded: false,
    };

    const result = offers.reducer(initialState, fetchOfferAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it ('should replace offer key isFavorite', () => {
    const initialState = {
      hasError: false,
      offers: fakeOffers,
      isOffersLoaded: false,
    };
    const expectedOffers = [{...fakeOffers[0], isFavorite: !fakeOffers[0].isFavorite}, ...fakeOffers.slice(1)];
    const expectedState = {
      hasError: false,
      offers: expectedOffers,
      isOffersLoaded: false,
    };

    const result = offers.reducer(initialState, replaceOffer(fakeOffers[0].id));

    expect(result.offers).toEqual(expectedState.offers);
  });
});
