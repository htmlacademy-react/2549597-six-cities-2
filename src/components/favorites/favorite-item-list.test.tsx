import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../mock-component';
import { fakeOffers } from '../../mock';
import { Offers, UserData } from '../../types/models';
import { FavoritesItemList } from './favorites-item-list';
import { AuthorizationStatus } from '../../constants';

describe('Component: FavoritesItemList', () => {

  const offers = fakeOffers;
  const store = {
    AUTH: {
      authStatus: AuthorizationStatus.NoAuth,
    },
    USER: {
      user: {} as UserData,
    },
    OFFERS: {
      offers: offers,
      isOffersLoaded: false,
    },
    FAVORITE_OFFERS: {
      favoriteOffers: [] as Offers,
    }
  };

  it('should render correct with offers', () => {
    const favoritesItemListTestId = 'favorites-item-list-container';
    const { withStoreComponent } = withStore(<FavoritesItemList offers={offers}/>, store);
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const FavoritesItemContainer = screen.getByTestId(favoritesItemListTestId);

    expect(FavoritesItemContainer).toBeInTheDocument();
  });

  it('should render correct without offers', () => {
    const favoritesItemListTestId = 'favorites-item-list-container';
    const { withStoreComponent } = withStore(<FavoritesItemList offers={[]}/>, store);
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const FavoritesItemContainer = screen.queryByText(favoritesItemListTestId);

    expect(FavoritesItemContainer).not.toBeInTheDocument();
  });
});
