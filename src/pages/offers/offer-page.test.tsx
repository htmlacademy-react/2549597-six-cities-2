import { render, screen } from '@testing-library/react';
import { fakeCurrentOffer, fakeReviews, fakeStore } from '../../test/mock';
import { withHistory, withStore } from '../../test/mock-component';
import { CurrentOffer } from '../../types/models';
import { TestIdMarkups } from '../../test/testid-markup';
import { OfferPage } from './offer-page';

describe('Component: OfferPage', () => {
  const currentOffer = fakeCurrentOffer;
  const reviews = fakeReviews;
  const id = currentOffer.id;
  const store = fakeStore();

  it('should render OfferPage', () => {
    const { withStoreComponent } = withStore(<OfferPage id={id} reviews={reviews} currentOffer={currentOffer}/>, store);
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const offerScreenContainer = screen.getByTestId(TestIdMarkups.OfferScreenTestId);

    expect(offerScreenContainer).toBeInTheDocument();
  });

  it('should not render OfferScreen when currentOffer is null', () => {
    const { withStoreComponent } = withStore(<OfferPage id={id} reviews={reviews} currentOffer={{} as CurrentOffer}/>, {...store,
      CURRENT_OFFER: {
        currentOffer: {} as CurrentOffer,
        isCurrentOfferLoaded: false,
        hasCurrentOfferError: false,
      },
    });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const offerScreenContainer = screen.queryByTestId(TestIdMarkups.OfferScreenTestId);

    expect(offerScreenContainer).not.toBeInTheDocument();
  });

  it('should not render OfferFormReview when the user is not authorized', () => {
    const { withStoreComponent } = withStore(<OfferPage id={id} reviews={reviews} currentOffer={currentOffer}/>, store);
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const formReviewContainer = screen.queryByTestId(TestIdMarkups.FormReviewTestId);

    expect(formReviewContainer).not.toBeInTheDocument();
  });
});
