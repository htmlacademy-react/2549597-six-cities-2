import { fireEvent, render, screen } from '@testing-library/react';
import { AuthorizationStatus } from '../../constants';
import { extractActionsTypes, fakeCurrentOffer, fakeOffers } from '../../mock';
import { withHistory, withStore } from '../../mock-component';
import OfferFavoriteButton from './offer-favorite-button';
import { setCurrentOfferFavorite } from '../../store/slices/current-offer/current-offer-action';
import { CurrentOffer } from '../../types/models';
import { addFavoriteOffer } from '../../store/api-actions';
import { replaceOffer } from '../../store/slices/offers-slice/offers-action';

describe('Component: OfferFavoriteButton', () => {
  const offers = fakeOffers;
  const currentOffer = {...fakeCurrentOffer, id: fakeOffers[0].id};
  const expectedText = 'offer-favorite-button-contaner';
  const store = {
    AUTH: {
      authStatus: AuthorizationStatus.Auth,
    },
    CURRENT_OFFER: {
      currentOffer: currentOffer,
      isCurrentOfferLoaded: false,
      hasCurrentOfferError: false,
    },
    OFFERS: {
      offers: offers,
      isOffersLoaded: false,
    }
  };

  it('should render correct', () => {

    const { withStoreComponent } = withStore(<OfferFavoriteButton />, store);
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const container = screen.getByTestId(expectedText);

    expect(container).toBeInTheDocument();
  });

  it('should dispatch "addFavoriteOffer", "replaceOffer", "setCurrentOfferFavorite" when user clicked on favorite button', () => {
    const { withStoreComponent, mockStore } = withStore(<OfferFavoriteButton />, store);
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const button = screen.getByTestId(expectedText);
    fireEvent.click(button);

    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      addFavoriteOffer.pending.type,
      replaceOffer.type,
      setCurrentOfferFavorite.type,
    ]);
  });

  it('should not dispatch when user not authorized', () => {
    const { withStoreComponent } = withStore(<OfferFavoriteButton />, {...store, AUTH: {authStatus: AuthorizationStatus.NoAuth}});
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const container = screen.queryByText(expectedText);

    expect(container).not.toBeInTheDocument();
  });

  it('should not dispatch when offers is empty', () => {
    const { withStoreComponent } = withStore(<OfferFavoriteButton />, {...store,
      CURRENT_OFFER: {
        currentOffer: {} as CurrentOffer,
        isCurrentOfferLoaded: false,
        hasCurrentOfferError: false,
      }
    });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const container = screen.queryByText(expectedText);

    expect(container).not.toBeInTheDocument();
  });
});
