import { fireEvent, render, screen } from '@testing-library/react';
import { withStore } from '../../mock-component';
import { Offers } from '../../types/models';
import ErrorScreen from './error-screen';
import { extractActionsTypes } from '../../mock';
import { fetchOfferAction } from '../../store/api-actions';

describe('Component: ErrorScreen', () => {
  it('should render correct', () => {
    const errorContainerTestId = 'error-container';
    const { withStoreComponent } = withStore(<ErrorScreen />, {
      OFFERS: {
        offers: [] as Offers,
        isOffersLoaded: false,
      }
    });

    render(withStoreComponent);
    const errorContainer = screen.getByTestId(errorContainerTestId);

    expect(errorContainer).toBeInTheDocument();
  });

  it('should dispatch "fetchOfferAction.pending" when user click on button', () => {
    const { withStoreComponent, mockStore } = withStore(<ErrorScreen />, {
      OFFERS: {
        offers: [] as Offers,
        isOffersLoaded: false,
      }
    });

    render(withStoreComponent);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      fetchOfferAction.pending.type,
    ]);
  });
});
