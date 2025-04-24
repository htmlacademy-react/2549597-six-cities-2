import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../mock-component';
import Header from './header';
import { AuthorizationStatus } from '../../constants';
import { fakeOffers, fakeUser } from '../../mock';

describe('Component: Header', () => {
  it('should render correct', () => {
    const headerComponentTestId = 'header-component';
    const { withStoreComponent } = withStore(<Header />, {
      AUTH: {
        authStatus: AuthorizationStatus.NoAuth,
      },
      FAVORITE_OFFERS: {
        favoriteOffers: fakeOffers,
      },
      USER: {
        user: fakeUser,
      },
      OFFERS: {
        offers: fakeOffers,
        isOffersLoaded: false,
      }
    });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);

    const HeaderContainer = screen.getByTestId(headerComponentTestId);

    expect(HeaderContainer).toBeInTheDocument();
  });

});
