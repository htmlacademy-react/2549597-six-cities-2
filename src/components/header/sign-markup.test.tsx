import { fireEvent, render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../test/mock-component';
import { AuthorizationStatus } from '../../constants';
import SignMarkup from './sign-markup';
import { extractActionsTypes, fakeStore } from '../../test/mock';
import { TestIdMarkups } from '../../test/testid-markup';
import { logoutAction } from '../../store/api-actions';

describe('Component: SignMarkup', () => {
  const store = {...fakeStore(),
    AUTH: {
      authStatus: AuthorizationStatus.Auth,
    }
  };

  it('should render SignMarkup when the user is not authorized', () => {
    const { withStoreComponent } = withStore(<SignMarkup />, fakeStore());
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const signMarkupContainer = screen.queryByText(TestIdMarkups.SignMarkupTestId);
    const unsignMarkupContainer = screen.getByTestId(TestIdMarkups.UnsignMarkupTestId);

    expect(signMarkupContainer).not.toBeInTheDocument();
    expect(unsignMarkupContainer).toBeInTheDocument();
  });

  it('should render SignMarkup when the user is authorized', () => {
    const { withStoreComponent } = withStore(<SignMarkup />, store);

    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const signMarkupContainer = screen.getByTestId(TestIdMarkups.SignMarkupTestId);
    const unsignMarkupContainer = screen.queryByText(TestIdMarkups.UnsignMarkupTestId);

    expect(signMarkupContainer).toBeInTheDocument();
    expect(unsignMarkupContainer).not.toBeInTheDocument();
  });

  it('should dispatch logoutAction when the user is authorized and clicked on Link', () => {
    const { withStoreComponent, mockStore } = withStore(<SignMarkup />, store);

    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const link = screen.getByTestId(TestIdMarkups.SignMarkupTestId);
    fireEvent.click(link);

    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      logoutAction.pending.type,
    ]);
  });

});
