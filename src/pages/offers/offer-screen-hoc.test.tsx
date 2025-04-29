import { AuthorizationStatus, SORT_TYPES } from '../../constants';
import { fakeCurrentOffer, fakeOffers, fakeReviews } from '../../mock';
import { withHistory, withStore } from '../../mock-component';
import { CurrentOffer, UserData } from '../../types/models';
import { OfferScreenHOC } from './offer-screen-hoc';
import { render, screen } from '@testing-library/react';

describe('Pages: OfferScreenHOC', () => {
  const offers = fakeOffers;
  const currentOffer = {...fakeCurrentOffer, id: offers[0].id};
  const reviews = fakeReviews;
  const expectedText = 'offer-screen-container';
  const store = {
    CURRENT_OFFER: {
      currentOffer: currentOffer,
      isCurrentOfferLoaded: false,
      hasCurrentOfferError: false,
    },
    REVIEW: {
      reviews: reviews,
      isReviewLoaded: false,
      hasReviewError: false,
    },
    AUTH: {
      authStatus: AuthorizationStatus.NoAuth,
    },
    USER: {
      user: {} as UserData,
    },
    OFFERS: {
      offers: offers,
      isOffersLoaded: false,
    },
    TOWN: {
      currentCity: currentOffer.city,
    },
    SORTING: {
      sorting: SORT_TYPES[0],
    },
    CURRENT_CARD: {
      currentCard: currentOffer.id,
    }
  };

  it('should render correct', () => {
    const { withStoreComponent } = withStore(<OfferScreenHOC/>, store);
    const withHistoryComponent = withHistory(withStoreComponent);


    render(withHistoryComponent);

    expect(screen.getByTestId(expectedText)).toBeInTheDocument();
  });

  it('should not render component when curren offer is empty', () => {
    const { withStoreComponent } = withStore(<OfferScreenHOC/>, {...store,
      CURRENT_OFFER: {
        currentOffer: '' as unknown as CurrentOffer,
        isCurrentOfferLoaded: false,
        hasCurrentOfferError: false,
      }
    });
    const withHistoryComponent = withHistory(withStoreComponent);


    render(withHistoryComponent);

    expect(screen.queryByTestId(expectedText)).not.toBeInTheDocument();
  });
});
