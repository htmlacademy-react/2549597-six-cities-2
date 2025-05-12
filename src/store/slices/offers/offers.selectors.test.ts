import { NameSpace } from '../../../constants';
import { fakeOffers } from '../../../test/mock';
import { getFavoriteOffers, getAllOffers, getCurrentLoadingStatus } from './selectors';
import { Offers } from '../../../types/models';

describe('Offers selectors', () => {
  it ('should return all offers', () => {
    const state = {
      [NameSpace.Offers]: {
        offers: fakeOffers,
        isOffersLoaded: false,
        hasError: false,
      }
    };
    const expectedState = fakeOffers;

    const result = getAllOffers(state);

    expect(result).toEqual(expectedState);

  });

  it ('should return all offers as []', () => {
    const state = {
      [NameSpace.Offers]: {
        offers: [] as Offers,
        isOffersLoaded: false,
        hasError: false,
      }
    };
    const expectedState = [] as Offers;

    const result = getAllOffers(state);

    expect(result).toEqual(expectedState);

  });

  it ('should return favorite offers', () => {
    const state = {
      [NameSpace.Offers]: {
        offers: fakeOffers,
        isOffersLoaded: false,
        hasError: false,
      }
    };
    const expectedState = fakeOffers.filter((offer) => offer.isFavorite);

    const result = getFavoriteOffers(state);

    expect(result).toEqual(expectedState);

  });

  it ('should return favorite offers as []', () => {
    const state = {
      [NameSpace.Offers]: {
        offers: fakeOffers.filter((offer) => !offer.isFavorite),
        isOffersLoaded: false,
        hasError: false,
      }
    };
    const expectedState = [] as Offers;

    const result = getFavoriteOffers(state);

    expect(result).toEqual(expectedState);

  });

  it ('should return loading status', () => {
    const state = {
      [NameSpace.Offers]: {
        offers: fakeOffers,
        isOffersLoaded: false,
        hasError: false,
      }
    };
    const expectedState = false;

    const result = getCurrentLoadingStatus(state);

    expect(result).toBe(expectedState);
  });
});
