import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../mock-component';
import { AuthorizationStatus } from '../../constants';
import SignMarkup from './sign-markup';

describe('Component: SignMarkup', () => {
  const signMarkupContainerTestId = 'auth-markup-container';
  const unsignMarkupContainerTestId = 'no-auth-markup-container';

  it('should render correct no auth', () => {
    const { withStoreComponent } = withStore(<SignMarkup />, {
      AUTH: {
        authStatus: AuthorizationStatus.NoAuth,
      }
    });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const SignMarkupContainer = screen.queryByText(signMarkupContainerTestId);
    const UnsignMarkupContainer = screen.getByTestId(unsignMarkupContainerTestId);

    expect(SignMarkupContainer).not.toBeInTheDocument();
    expect(UnsignMarkupContainer).toBeInTheDocument();
  });

  it('should render correct auth', () => {
    const { withStoreComponent } = withStore(<SignMarkup />, {
      AUTH: {
        authStatus: AuthorizationStatus.Auth,
      }
    });

    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const SignMarkupContainer = screen.getByTestId(signMarkupContainerTestId);
    const UnsignMarkupContainer = screen.queryByText(unsignMarkupContainerTestId);

    expect(SignMarkupContainer).toBeInTheDocument();
    expect(UnsignMarkupContainer).not.toBeInTheDocument();
  });

});
