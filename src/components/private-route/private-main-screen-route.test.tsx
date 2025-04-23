import { MemoryHistory, createMemoryHistory } from 'history';
import { Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { AppRoute } from '../../constants';
import { withHistory, withStore } from '../../mock-component';
import { describe, it, expect, beforeAll, beforeEach } from 'vitest';
import PrivateMainScreenRoute from './private-main-screen-route';
import { Offers } from '../../types/models';
import { fakeOffers } from '../../mock';

describe('Component: PrivateMainScreenRoute', () => {
  let mockHistory: MemoryHistory;


  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(AppRoute.Main);
  });

  it('should render component for public route, when user not authorized', () => {
    const expectedText = 'public route';
    const notExpectedText = 'private route';
    const preparedComponent = withHistory(
      <Routes>
        <Route path={AppRoute.Main} element={<span>{expectedText}</span>} />
        <Route path={AppRoute.Main} element={
          <PrivateMainScreenRoute>
            <span>{notExpectedText}</span>
          </PrivateMainScreenRoute>
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
        <Route path={AppRoute.Main} element={<span>{notExpectedText}</span>} />
        <Route path={AppRoute.Main} element={
          <PrivateMainScreenRoute>
            <span>{expectedText}</span>
          </PrivateMainScreenRoute>
        }
        />
      </Routes>,
      mockHistory
    );

    const { withStoreComponent } = withStore(preparedComponent, {OFFERS: {offers: fakeOffers, isOffersLoaded: false}});

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });
});
//тут вопрос насчёт роутинга, в первом и втором путях должен же быть Main по идее?
