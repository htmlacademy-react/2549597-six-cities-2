import { render, screen, waitFor } from '@testing-library/react';
import { withHistory, withStore } from '../../test/mock-component';
import { CurrentOffer } from '../../types/models';
import { fakeStore } from '../../test/mock';
import PrivateOfferRoute from './private-offer-route';
import { MemoryHistory, createMemoryHistory } from 'history';
import { TestIdMarkups } from '../../test/testid-markup';

describe('Component: PrivateOfferRoute', () => {
  let mockHistory: MemoryHistory;
  const store = fakeStore();
  const id = store.CURRENT_OFFER.currentOffer.id;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(`/offer/${id}`);
  });

  it('should render OfferScreen when the current offer is found among all offers ', async() => {
    const withHistoryComponent = withHistory(<PrivateOfferRoute />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, store);

    render(withStoreComponent);
    const expectedContainer = screen.getByTestId(TestIdMarkups.OfferScreenTestId);

    await waitFor(() => {
      expect(expectedContainer).toBeInTheDocument();
    });

  });

  it('should not render OfferScreen when the current offer is empty ', () => {
    const { withStoreComponent } = withStore(<PrivateOfferRoute />, {...store,
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

