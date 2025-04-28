import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../mock-component';
import MainEmptyScreen from './main-empty-screen';
import { AuthorizationStatus, CITIES } from '../../constants';
import { UserData } from '../../types/models';

describe('Component: MainEmptyScreen', () => {
  it('should render correct', () => {
    const mainContainerTestId = 'main-empty-container';
    const { withStoreComponent } = withStore(<MainEmptyScreen />, {
      AUTH: {
        authStatus: AuthorizationStatus.Auth,
      },
      USER: {
        user: {} as UserData,
      },
      OFFERS: {
        offers: [],
        isOffersLoaded: false,
      },
      TOWN: {
        currentCity: CITIES[0],
      }
    });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const mainContainer = screen.getByTestId(mainContainerTestId);

    expect(mainContainer).toBeInTheDocument();
  });
});
