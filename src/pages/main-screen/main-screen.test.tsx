import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../mock-component';
import { AuthorizationStatus, CITIES, SORT_TYPES } from '../../constants';
import { UserData } from '../../types/models';
import { MainScreen } from './main-screen';

describe('Component: MainScreen', () => {
  it('should render correct', () => {
    const mainContainerTestId = 'main-screen-container';
    const { withStoreComponent } = withStore(<MainScreen />, {
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
      },
      SORTING: {
        sorting: SORT_TYPES[0],
      },
      CURRENT_CARD: {
        currentCard: '',
      }
    });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const mainContainer = screen.getByTestId(mainContainerTestId);

    expect(mainContainer).toBeInTheDocument();
  });
});
