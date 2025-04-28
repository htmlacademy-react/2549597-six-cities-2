import { render, screen } from '@testing-library/react';
import { AuthorizationStatus, CITIES, SORT_TYPES } from '../../constants';
import { fakeCurrentOffer, fakeOffers, fakeReviews } from '../../mock';
import { withHistory, withStore } from '../../mock-component';
import { CurrentOffer, UserData } from '../../types/models';
import { OfferScreen } from './offer-screen';

describe('Component: OfferScreen', () => {
  const currentOffer = fakeCurrentOffer;
  const store = {
    AUTH: {
      authStatus: AuthorizationStatus.Auth,
    },
    USER: {
      user: {} as UserData,
    },
    OFFERS: {
      offers: fakeOffers,
      isOffersLoaded: false,
    },
    TOWN: {
      currentCity: CITIES[0],
    },
    CURRENT_OFFER: {
      currentOffer: currentOffer,
      isCurrentOfferLoaded: false,
      hasCurrentOfferError: false,
    },
    SORTING: {
      sorting: SORT_TYPES[0],
    },
    CURRENT_CARD: {
      currentCard: '',
    }
  };

  it('should render correct', () => {
    const reviews = fakeReviews;
    const id = currentOffer.id;
    const offerScreenContainerTestId = 'offer-screen-container';
    const { withStoreComponent } = withStore(<OfferScreen id={id} reviews={reviews} currentOffer={currentOffer}/>, store);
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const offerScreenContainer = screen.getByTestId(offerScreenContainerTestId);

    expect(offerScreenContainer).toBeInTheDocument();
  });

  it('should render incorrect when currentOffer is null', () => {
    const reviews = fakeReviews;
    const id = currentOffer.id;
    const offerScreenContainerTestId = 'offer-screen-container';
    const { withStoreComponent } = withStore(<OfferScreen id={id} reviews={reviews} currentOffer={null as unknown as CurrentOffer}/>, {...store,
      CURRENT_OFFER: {
        currentOffer: null as unknown as CurrentOffer,
        isCurrentOfferLoaded: false,
        hasCurrentOfferError: false,
      },
    });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const offerScreenContainer = screen.queryByTestId(offerScreenContainerTestId);

    expect(offerScreenContainer).not.toBeInTheDocument();
  });

  it('should not render OfferFormReview when use is not authorized', () => {
    const reviews = fakeReviews;
    const id = currentOffer.id;
    const formReviewContainerTestId = 'form-review-container';
    const { withStoreComponent } = withStore(<OfferScreen id={id} reviews={reviews} currentOffer={currentOffer}/>, {...store,
      AUTH: {
        authStatus: AuthorizationStatus.NoAuth,
      },
    });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const formReviewContainer = screen.queryByTestId(formReviewContainerTestId);

    expect(formReviewContainer).not.toBeInTheDocument();
  });
});
