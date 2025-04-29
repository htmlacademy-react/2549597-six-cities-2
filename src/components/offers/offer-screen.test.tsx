import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../test/mock-component';
import { CurrentOffer } from '../../types/models';
import { fakeStore } from '../../test/mock';
import OfferScreen from './offer-screen';
import { MemoryHistory, createMemoryHistory } from 'history';
import { TestIdMarkups } from '../../test/testid-markup';


describe('Component: OfferScreen', () => {
  let mockHistory: MemoryHistory;
  const store = fakeStore();
  const id = store.CURRENT_OFFER.currentOffer.id;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(`/offer/${id}`);
  });

  // it('should render OfferPage when the current offer is found among all offers ', () => {
  //   const withHistoryComponent = withHistory(<OfferScreen />, mockHistory);
  //   const { withStoreComponent } = withStore(withHistoryComponent, store);

  //   render(withStoreComponent);
  //   const expectedContainer = screen.getByTestId(TestIdMarkups.OfferScreenTestId);

  //   expect(expectedContainer).toBeInTheDocument();
  // });

  it('should not render OfferPage when the current offer is empty ', () => {
    const { withStoreComponent } = withStore(<OfferScreen />, {...store,
      CURRENT_OFFER: {
        currentOffer: null as unknown as CurrentOffer,
        isCurrentOfferLoaded: false,
        hasCurrentOfferError: false,
      },
    });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const expectedContainer = screen.queryByTestId(TestIdMarkups.OfferScreenTestId);

    expect(expectedContainer).not.toBeInTheDocument();

  });

});

