import { fakeCurrentOffer, fakeReviews } from '../../mock';
import { withHistory, withStore } from '../../mock-component';
// import { CurrentOffer } from '../../types/models';
import { OfferScreenHOC } from './offer-screen-hoc';
import { render, screen } from '@testing-library/react';

describe('Pages: OfferScreenHOC', () => {
  const currentOffer = fakeCurrentOffer;
  const reviews = fakeReviews;
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
    }
  };

  it('should render correct', () => {
    const expectedText = 'WrappedComponent';
    const component = () => <span>{expectedText}</span>;
    const PreparedComponent = OfferScreenHOC(component);
    const { withStoreComponent } = withStore(<PreparedComponent/>, store);
    const withHistoryComponent = withHistory(withStoreComponent);


    render(withHistoryComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  // it('should not render component when curren offer is empty', () => {
  //   const expectedText = 'WrappedComponent';
  //   const component = () => <div>{expectedText}</div>;
  //   const PreparedComponent = OfferScreenHOC(component);
  //   const { withStoreComponent } = withStore(<PreparedComponent/>, {...store,
  //     CURRENT_OFFER: {
  //       currentOffer: {} as CurrentOffer,
  //       isCurrentOfferLoaded: false,
  //       hasCurrentOfferError: false,
  //     }
  //   });
  //   const withHistoryComponent = withHistory(withStoreComponent);


  //   render(withHistoryComponent);

  //   expect(screen.queryByText(expectedText)).not.toBeInTheDocument();
  // });
});
