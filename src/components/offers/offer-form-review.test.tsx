import { fireEvent, render, screen } from '@testing-library/react';
import { AuthorizationStatus } from '../../constants';
import { extractActionsTypes, fakeOffer } from '../../mock';
import { withHistory, withStore } from '../../mock-component';
import OfferFormReview from './offer-form-review';
import { sendUserReview } from '../../store/api-actions';

describe('Component: OfferFormReview', () => {
  const offer = fakeOffer();
  const formReviewContainerTestId = 'form-review-container';
  const store = {
    AUTH: {
      authStatus: AuthorizationStatus.Auth,
    }
  };

  it('should render correct', () => {
    const { withStoreComponent } = withStore(<OfferFormReview id={offer.id}/>, store);
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const formReviewContainer = screen.getByTestId(formReviewContainerTestId);

    expect(formReviewContainer).toBeInTheDocument();
  });

  it('should not render component when user not authorized', () => {
    const { withStoreComponent } = withStore(<OfferFormReview id={offer.id}/>, {...store, AUTH: {authStatus: AuthorizationStatus.NoAuth}});
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const formReviewContainer = screen.queryByTestId(formReviewContainerTestId);

    expect(formReviewContainer).not.toBeInTheDocument();
  });

  it('should dispatch "userReview" when  user click on button and user is authorized', () => {
    const { withStoreComponent, mockStore } = withStore(<OfferFormReview id={offer.id}/>, store);
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const button = screen.getByRole('button');
    fireEvent.click(button);

    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([sendUserReview.pending.type]);
  });
});
