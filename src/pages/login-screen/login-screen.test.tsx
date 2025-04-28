import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../mock-component';
import LoginScreen from './login-screen';
import userEvent from '@testing-library/user-event';

describe('Component: LoginScreen', () => {
  it('should render correct', () => {
    const loginContainerTestId = 'login-container';
    const { withStoreComponent } = withStore(<LoginScreen />, {});
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const loginContainer = screen.getByTestId(loginContainerTestId);

    expect(loginContainer).toBeInTheDocument();
  });

  it('should render correctly when user enter login and password', async() => {
    const emailContainerTestId = 'email-container';
    const passwordContainer = 'password-container';
    const loginValue = 'Valentin';
    const passwordValue = '12345';
    const { withStoreComponent } = withStore(<LoginScreen />, {});
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    await userEvent.type(screen.getByTestId(emailContainerTestId),loginValue);
    await userEvent.type(screen.getByTestId(passwordContainer),passwordValue);

    expect(screen.getByDisplayValue(loginValue)).toBeInTheDocument();
    expect(screen.getByDisplayValue(passwordValue)).toBeInTheDocument();
  });
});
