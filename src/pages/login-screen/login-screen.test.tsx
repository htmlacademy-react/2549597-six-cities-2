import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../test/mock-component';
import LoginScreen from './login-screen';
import userEvent from '@testing-library/user-event';
import { TestIdMarkups } from '../../test/testid-markup';
import { AuthorizationStatus } from '../../constants';

describe('Component: LoginScreen', () => {

  it('should render LoginScreen', () => {
    const { withStoreComponent } = withStore(<LoginScreen authorizationStatus={AuthorizationStatus.NoAuth} />, {});
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const loginContainer = screen.getByTestId(TestIdMarkups.LoginTestId);

    expect(loginContainer).toBeInTheDocument();
  });

  it('should render correctly when the user enter login and password', async() => {
    const loginValue = 'Valentin';
    const passwordValue = '12345';
    const { withStoreComponent } = withStore(<LoginScreen authorizationStatus={AuthorizationStatus.NoAuth} />, {});
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    await userEvent.type(screen.getByTestId(TestIdMarkups.EmailTestId), loginValue);
    await userEvent.type(screen.getByTestId(TestIdMarkups.PasswordTestId), passwordValue);

    expect(screen.getByDisplayValue(loginValue)).toBeInTheDocument();
    expect(screen.getByDisplayValue(passwordValue)).toBeInTheDocument();
  });

  it('should not render LoginScreen when the user is authorized', () => {
    const { withStoreComponent } = withStore(<LoginScreen authorizationStatus={AuthorizationStatus.Auth} />, {});
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const loginContainer = screen.queryByTestId(TestIdMarkups.LoginTestId);

    expect(loginContainer).not.toBeInTheDocument();
  });
});
