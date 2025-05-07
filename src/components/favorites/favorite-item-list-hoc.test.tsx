import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../test/mock-component';
import { FavoriteItemListHOC } from './favorites-item-list-hoc';
import { fakeOffers, fakeStore } from '../../test/mock';
import { FavoritesItemList } from './favorites-item-list';

describe('HOC: FavoriteItemListHOC', () => {
  const expectedText = 'favorites-item-list-container';
  const ComponentWithHOC = FavoriteItemListHOC(FavoritesItemList);
  const store = fakeStore();

  it('should render the wrapped component when favorite offers are present', () => {
    const { withStoreComponent } = withStore(<ComponentWithHOC />, {...store,
      FAVORITE_OFFERS: {
        favoriteOffers: fakeOffers,
      }
    });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);

    expect(screen.getByTestId(expectedText)).toBeInTheDocument();
  });

  it('should not display the wrapped component when the list of favorite offers is empty', () => {
    const { withStoreComponent } = withStore(<ComponentWithHOC />, {...store,
      FAVORITE_OFFERS: {
        favoriteOffers: [],
      }
    });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);

    expect(screen.queryByTestId(expectedText)).not.toBeInTheDocument();
  });
});
