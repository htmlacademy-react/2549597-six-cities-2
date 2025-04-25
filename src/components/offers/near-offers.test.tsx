import { fireEvent, render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../mock-component';

import { extractActionsTypes, fakeCurrentOffer, fakeOffers } from '../../mock';
import { AuthorizationStatus, SORT_TYPES } from '../../constants';
import { setCurrentCardId } from '../../store/slices/current-card-slice/current-card-slice';
import NearOffers from './near-offers';

describe('Component: NearOffers', () => {
  const offers = fakeOffers;
  const currentOffer = fakeCurrentOffer;
  const store = {
    OFFERS: {
      offers: offers,
      isOffersLoaded: false,
    },
    CURRENT_OFFER: {
      currentOffer: currentOffer,
      isCurrentOfferLoaded: false,
      hasCurrentOfferError: false,
    },
    TOWN: {
      currentCity: offers[0].city,
    },
    SORTING: {
      sorting: SORT_TYPES[0],
    },
    AUTH: {
      authStatus: AuthorizationStatus.NoAuth,
    },
  };

  it('should render correct', () => {
    const nearOffersContainerTestId = 'near-offers-container';
    const { withStoreComponent } = withStore(<NearOffers />, store);
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const nearOffersContainer = screen.getByTestId(nearOffersContainerTestId);

    expect(nearOffersContainer).toBeInTheDocument();
  });

  it('should dispatch "setCurrentCardId" when the user hovered the mouse from the hotel card', () => {
    const articleContainer = 'near-offers-article';
    const { withStoreComponent, mockStore } = withStore(<NearOffers />, store);
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const article = screen.getAllByTestId(articleContainer);

    fireEvent.mouseOver(article[0]);
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([setCurrentCardId.type]);
  });

  it('should dispatch "setCurrentCardId" when the user removed the mouse from the hotel card', () => {
    const articleContainer = 'near-offers-article';
    const { withStoreComponent, mockStore } = withStore(<NearOffers />, store);
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const article = screen.getAllByTestId(articleContainer);

    fireEvent.mouseLeave(article[0]);
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([setCurrentCardId.type]);
  });
});
