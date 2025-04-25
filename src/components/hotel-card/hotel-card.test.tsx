import { fireEvent, render, screen } from '@testing-library/react';
import { AuthorizationStatus } from '../../constants';
import { extractActionsTypes, fakeOffer } from '../../mock';
import { withHistory, withStore } from '../../mock-component';
import { HotelCard } from './hotel-card';
import { addFavoriteOffer } from '../../store/api-actions';
import { replaceOffer } from '../../store/slices/offers-slice/offers-action';

describe('Component: HotelCard', () => {
  const offer = fakeOffer();

  it('should return correct', () => {
    const expectedText = 'hotel-card-container';
    const { withStoreComponent } = withStore(<HotelCard offer={offer}/>, {
      AUTH: {
        authStatus: AuthorizationStatus.Auth,
      }
    });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const container = screen.getByTestId(expectedText);

    expect(container).toBeInTheDocument();
  });

  it('should dispatch "addFavoriteOffer", "replaceOffer" when authorized user clicked on favorite button', () => {
    const { withStoreComponent, mockStore } = withStore(<HotelCard offer={offer}/>, {
      AUTH: {
        authStatus: AuthorizationStatus.Auth,
      }
    });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const button = screen.getByRole('button');
    fireEvent.click(button);

    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      addFavoriteOffer.pending.type,
      replaceOffer.type,
    ]);
  });

  it('should redirect to LoginScreen ', () => {
    const expectedText = 'hotel-card-container';
    const { withStoreComponent } = withStore(<HotelCard offer={offer}/>, {
      AUTH: {
        authStatus: AuthorizationStatus.NoAuth,
      }
    });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const container = screen.queryByText(expectedText);

    expect(container).not.toBeInTheDocument();
  });
});
