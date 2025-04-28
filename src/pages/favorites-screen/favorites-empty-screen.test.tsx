import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../mock-component';
import FavoritesEmptyScreen from './favorites-empty-screen';
import { AuthorizationStatus } from '../../constants';
import { UserData } from '../../types/models';
import { fakeOffers } from '../../mock';

describe('Component: FavoritesEmptyScreen', () => {
  it('should render correct when user authorized', () => {
    const expectedText = 'Save properties to narrow down search or plan your future trips.';
    const { withStoreComponent } = withStore(<FavoritesEmptyScreen />, {
      AUTH: {
        authStatus: AuthorizationStatus.Auth,
      },
      USER: {
        user: {} as UserData,
      },
      OFFERS: {
        offers: fakeOffers,
        isOffersLoaded: false,
      }
    });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const result = screen.getByText(expectedText);

    expect(result).toBeInTheDocument();
  });
});
