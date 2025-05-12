import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../test/mock-component';
import { fakeOffers, fakeStore } from '../../test/mock';
import { Offers } from '../../types/models';
import { Favorites } from './favorites';
import { TestIdMarkups } from '../../test/testid-markup';

describe('Component: FavoritesItemList', () => {
  const offers = fakeOffers;
  const store = {...fakeStore(),
    FAVORITE_OFFERS: {
      favoriteOffers: [] as Offers,
    }
  };

  it('should render FavoritesItemList when offers is not empty', () => {
    const { withStoreComponent } = withStore(<Favorites offers={offers}/>, store);
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const favoritesItemContainer = screen.getByTestId(TestIdMarkups.FavoritesItemListTestId);

    expect(favoritesItemContainer).toBeInTheDocument();
  });

  it('should not render FavoritesItemList when offers is empty', () => {
    const { withStoreComponent } = withStore(<Favorites offers={[]}/>, store);
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const favoritesItemContainer = screen.queryByText(TestIdMarkups.FavoritesItemListTestId);

    expect(favoritesItemContainer).not.toBeInTheDocument();
  });
});
