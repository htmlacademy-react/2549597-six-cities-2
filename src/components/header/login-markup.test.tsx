import { render, screen } from '@testing-library/react';
import LoginMarkup from './login -markup';
import { withHistory, withStore } from '../../mock-component';
import { AuthorizationStatus } from '../../constants';
import { fakeOffers, fakeUser } from '../../mock';

describe('Component: LoginMarkup', () => {
  it('should render correct when user not authirized', () => {
    const loginMarkupContainerTestId = 'login-markup-container';
    const { withStoreComponent } = withStore(<LoginMarkup />, {
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

    render(withStoreComponent);
    const LoginMarkupContainer = screen.queryByText(loginMarkupContainerTestId);

    expect(LoginMarkupContainer).not.toBeInTheDocument();
  });

  it('should render correct when user authorized', () => {
    const loginMarkupContainerTestId = 'login-markup-container';
    const { withStoreComponent } = withStore(<LoginMarkup />, {
      AUTH: {
        authStatus: AuthorizationStatus.Auth,
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
    const LoginMarkupContainer = screen.getByTestId(loginMarkupContainerTestId);

    expect(LoginMarkupContainer).toBeInTheDocument();
  });

});
