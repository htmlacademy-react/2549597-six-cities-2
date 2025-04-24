import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../mock-component';
import { MemoryHistory, createMemoryHistory } from 'history';
import { Route, Routes } from 'react-router-dom';
import PrivateMainScreenRoute from './main-screen-route';
import { fakeOffers } from '../../mock';
import { AppRoute, AuthorizationStatus, CITIES, SORT_TYPES } from '../../constants';
import { Offers } from '../../types/models';

vi.mock('../../pages/main-screen/main-empty-screen', () => ({
  default: () => <div data-testid="empty-screen">Mocked Empty Screen</div>
}));

describe('Component: PrivateMainScreenRoute', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(AppRoute.Main);
  });

  it('should render MainEmptyScreen when no offers', () => {
    const preparedComponent = withHistory(
      <Routes>
        <Route path={AppRoute.Main} element={
          <PrivateMainScreenRoute>
            <div>Private Content</div>
          </PrivateMainScreenRoute>
        }
        />
      </Routes>,
      mockHistory
    );

    const { withStoreComponent } = withStore(preparedComponent, {
      TOWN: {
        currentCity: CITIES[0],
      },
      OFFERS: {
        offers: [] as Offers,
        isOffersLoaded: false,
      },
      AUTH: {
        authStatus: AuthorizationStatus.NoAuth,
      },
      SORTING: {
        sorting: SORT_TYPES[0],
      }
    });

    render(withStoreComponent);

    expect(screen.getByTestId('empty-screen')).toBeInTheDocument();
    expect(screen.queryByText('Private Content')).not.toBeInTheDocument();
  });

  it('should render children when offers exist', () => {
    const notExpectedText = 'Not expected text';
    const preparedComponent = withHistory(
      <Routes>
        <Route path={AppRoute.Login} element={<span>{notExpectedText}</span>} />
        <Route path={AppRoute.Main} element={
          <PrivateMainScreenRoute>
            <div data-testid="private-content">Private Content</div>
          </PrivateMainScreenRoute>
        }
        />
      </Routes>,
      mockHistory
    );

    const { withStoreComponent } = withStore(preparedComponent, {
      TOWN: {
        currentCity: fakeOffers[0].city,
      },
      OFFERS: {
        offers: fakeOffers,
        isOffersLoaded: false,
      },
      AUTH: {
        authStatus: AuthorizationStatus.NoAuth,
      },
      SORTING: {
        sorting: SORT_TYPES[0],
      }
    });

    render(withStoreComponent);

    expect(screen.getByText('Private Content')).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });
});
