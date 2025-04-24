import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../mock-component';
import { FavoriteItemListHOC } from './favorites-item-list-hoc';
import { fakeOffers } from '../../mock';

describe('HOC: FavoriteItemListHOC', () => {

  it('should return correct', () => {
    const expectedText = 'Wrapped Component';
    const component = () => <div>{expectedText}</div>;
    const ComponentWithHOC = FavoriteItemListHOC(component);
    const { withStoreComponent } = withStore(<ComponentWithHOC />, {
      FAVORITE_OFFERS: {
        favoriteOffers: fakeOffers,
      }
    });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should return incorrect', () => {
    const expectedText = 'Wrapped Component';
    const component = () => <div>{expectedText}</div>;
    const ComponentWithHOC = FavoriteItemListHOC(component);
    const { withStoreComponent } = withStore(<ComponentWithHOC />, {
      FAVORITE_OFFERS: {
        favoriteOffers: [],
      }
    });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);

    expect(screen.queryByText(expectedText)).not.toBeInTheDocument();
  });
});
