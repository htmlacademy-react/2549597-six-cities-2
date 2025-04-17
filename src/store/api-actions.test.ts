import { describe } from 'vitest';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { State } from '../types/state';
import { Action } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AppThunkDispatch, extractActionsTypes, fakeOffers } from '../mock';
import { ApiRoute, AuthorizationStatus, CITIES, SORT_TYPES } from '../constants';
import { CurrentOffer, ErrorSlice, Offers, Reviews, UserData } from '../types/models';
import { checkAuthAction, fetchOfferAction } from './api-actions';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeAll(() => ({
    store: mockStoreCreator({
      OFFERS: {
        offers: [] as Offers,
        isOffersLoaded: false,
      },
      TOWN: { currentCity: CITIES[1] },
      SORTING: { sorting: SORT_TYPES[0] },
      AUTH: { authStatus: AuthorizationStatus.Unknown },
      ERROR: { error: null as ErrorSlice },
      USER: { user: {} as UserData },
      REVIEW: {
        reviews: null as unknown as Reviews,
        isReviewLoaded: false,
        hasReviewError: false,
      },
      CURRENT_OFFER: {
        currentOffer: {} as CurrentOffer,
        isCurrentOfferLoaded: false,
        hasCurrentOfferError: false,
      },
      CURRENT_CARD: { currentCard: '' },
      FAVORITE_OFFERS: { favoriteOffers: [] as Offers }
    })
  }));

  describe('checkAuthAction', () => {
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" with thunk "checkAuthAction', async () => {
      mockAxiosAdapter.onGet(ApiRoute.Login).reply(200);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
    });

    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.rejected" when server response 400', async() => {
      mockAxiosAdapter.onGet(ApiRoute.Login).reply(400);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type,
      ]);
    });
  });

  describe('fetchQuestionAction', () => {
    it('should dispatch "fetchOfferAction.pending", "fetchOfferAction.fulfilled", when server response 200', async() => {
      const mockQuestions = fakeOffers;
      mockAxiosAdapter.onGet(ApiRoute.Offers).reply(200, mockQuestions);

      await store.dispatch(fetchOfferAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOfferActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOfferAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOfferAction.pending.type,
        fetchOfferAction.fulfilled.type,
      ]);

      expect(fetchOfferActionFulfilled.payload)
        .toEqual(mockQuestions);
    });

    it('should dispatch "fetchOfferAction.pending", "fetchOfferAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(ApiRoute.Offers).reply(400, []);

      await store.dispatch(fetchOfferAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOfferAction.pending.type,
        fetchOfferAction.rejected.type,
      ]);
    });
  });

});
