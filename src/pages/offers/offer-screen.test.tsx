import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../test/mock-component';
import { CurrentOffer } from '../../types/models';
import { fakeStore } from '../../test/mock';
import { MemoryHistory, createMemoryHistory } from 'history';
import { TestIdMarkups } from '../../test/testid-markup';
import { Route, Routes } from 'react-router-dom';
import OfferScreen from './offer-screen';
import { AppRoute } from '../../constants';
import ErrorScreen from '../error-screen/error-screen';


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

  it('should render OfferPage when the current offer is found among all offers ', () => {
    const { withStoreComponent } = withStore(
      <Routes>
        <Route path={AppRoute.Error} element={<ErrorScreen />} />
        <Route path='/offer/:id' element={<OfferScreen />} />
      </Routes>,
      store
    );
    const withHistoryComponent = withHistory(withStoreComponent, mockHistory);

    render(withHistoryComponent);
    const expectedContainer = screen.getByTestId(TestIdMarkups.OfferScreenTestId);
    const notExpectedContainer = screen.queryByText(TestIdMarkups.ErrorTestId);

    expect(expectedContainer).toBeInTheDocument();
    expect(notExpectedContainer).not.toBeInTheDocument();
  });


  it('should not render OfferPage when the current offer is empty ', () => {
    const { withStoreComponent } = withStore(
      <Routes>
        <Route path={AppRoute.Error} element={<ErrorScreen />} />
        <Route path='/offer/:id' element={<OfferScreen />} />
      </Routes>,
      {...store,
        CURRENT_OFFER: {
          currentOffer: null as unknown as CurrentOffer,
          isCurrentOfferLoaded: false,
          hasCurrentOfferError: false,
        },
      });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const notExpectedContainer = screen.queryByTestId(TestIdMarkups.OfferScreenTestId);
    const expectedContainer = screen.getByTestId(TestIdMarkups.ErrorTestId);

    expect(notExpectedContainer).not.toBeInTheDocument();
    expect(expectedContainer).toBeInTheDocument();
  });

});

