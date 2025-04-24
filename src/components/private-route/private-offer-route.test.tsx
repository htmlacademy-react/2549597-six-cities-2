import { MemoryHistory, createMemoryHistory } from 'history';
import { Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { AppRoute } from '../../constants';
import { withHistory, withStore } from '../../mock-component';
import { Offers } from '../../types/models';
import { fakeOffers } from '../../mock';
import PrivateOfferRoute from './private-offer-route';

describe('Component: PrivateOfferRoute', () => {
  let mockHistory: MemoryHistory;
  const offers = fakeOffers;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(`/offer/${offers[0].id}`);
  });

  it('should render component for public route, when user not authorized', () => {
    const expectedText = 'public route';
    const notExpectedText = 'private route';
    const preparedComponent = withHistory(
      <Routes>
        <Route path={AppRoute.Error} element={<span>{expectedText}</span>} />
        <Route path={AppRoute.Offer} element={
          <PrivateOfferRoute>
            <span>{notExpectedText}</span>
          </PrivateOfferRoute>
        }
        />
      </Routes>,
      mockHistory
    );
    const { withStoreComponent } = withStore(preparedComponent, {
      OFFERS: {
        offers: [] as Offers,
        isOffersLoaded: false
      }
    });

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user authorized', () => {
    const expectedText = 'private route';
    const notExpectedText = 'public route';
    const preparedComponent = withHistory(
      <Routes>
        <Route path={AppRoute.Error} element={<span>{notExpectedText}</span>} />
        <Route path={AppRoute.Offer} element={
          <PrivateOfferRoute>
            <span>{expectedText}</span>
          </PrivateOfferRoute>
        }
        />
      </Routes>,
      mockHistory
    );

    const { withStoreComponent } = withStore(preparedComponent, {OFFERS: {offers: offers, isOffersLoaded: false}});

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });
});

