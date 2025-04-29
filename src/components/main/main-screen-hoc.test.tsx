import { render, screen } from '@testing-library/react';
import { fakeOffers } from '../../mock';
import { withHistory, withStore } from '../../mock-component';
import { MainScreenHOC } from './main-screen-hoc';
import { AuthorizationStatus, SORT_TYPES } from '../../constants';
import { UserData } from '../../types/models';

describe('Component: MainScreenHOC', () => {
  const offers = fakeOffers;
  const expectedText = 'main-screen-container';
  const store = {
    OFFERS: {
      offers: offers,
      isOffersLoaded: false,
    },
    TOWN: {
      currentCity: offers[0].city,
    },
    SORTING: {
      sorting: SORT_TYPES[0],
    },
    AUTH: {
      authStatus: AuthorizationStatus.NoAuth,
    },
    USER: {
      user: {} as UserData,
    },
    CURRENT_CARD: {
      currentCard: offers[0].id,
    }
  };

  it('should render correct', () => {
    const { withStoreComponent } = withStore(<MainScreenHOC />, store);
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);

    expect(screen.getByTestId(expectedText)).toBeInTheDocument();
  });

  it('should render incorrect', () => {
    const { withStoreComponent } = withStore(<MainScreenHOC />, {...store,
      OFFERS: {
        offers: [],
        isOffersLoaded: false,
      }});
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);

    expect(screen.queryByTestId(expectedText)).not.toBeInTheDocument();
  });
});
