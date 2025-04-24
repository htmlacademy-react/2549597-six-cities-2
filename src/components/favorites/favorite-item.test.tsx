import { fireEvent, render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../mock-component';
import FavoritesItem from './favorites-item';
import { extractActionsTypes, fakeOffer, fakeOffers } from '../../mock';
import { Offers } from '../../types/models';
import { addFavoriteOffer } from '../../store/api-actions';
import { replaceOffer } from '../../store/slices/offers-slice/offers-action';
import { setFavoriteOffer } from '../../store/slices/favorite-offers-slice/favorites-offers-action';

describe('Component: FavoritesItem', () => {

  const offer = fakeOffer();

  it('should render correct', () => {
    const favoritesItemTestId = 'favorites-item-container';
    const { withStoreComponent } = withStore(<FavoritesItem offer={offer}/>, {});
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const FavoritesItemContainer = screen.getByTestId(favoritesItemTestId);

    expect(FavoritesItemContainer).toBeInTheDocument();
  });

  it ('should set to store favoriteOffer, replaceOffer, setFavoriteOffer', () => {
    const { withStoreComponent, mockStore } = withStore(<FavoritesItem offer={offer}/>, {
      OFFERS: {
        offers: fakeOffers,
        isOffersLoaded: false,
      },
      FAVORITE_OFFERS: {
        favoriteOffers: [] as Offers,
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
      setFavoriteOffer.type,
    ]);
  });

});
