import { fireEvent, render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../mock-component';
import HotelCardList from './hotel-card-list';
import { extractActionsTypes, fakeOffers } from '../../mock';
import { AuthorizationStatus, SORT_TYPES } from '../../constants';
import { setCurrentCardId } from '../../store/slices/current-card-slice/current-card-slice';

describe('Component: HotelCardList', () => {
  it('should render correct', () => {
    const hotelCrdListContainerTestId = 'hotel-card-list-container';
    const { withStoreComponent } = withStore(<HotelCardList />, {
      OFFERS: {
        offers: fakeOffers,
        isOffersLoaded: false,
      },
      TOWN: {
        currentCity: fakeOffers[0].city,
      },
      SORTING: {
        sorting: SORT_TYPES[0],
      },
      AUTH: {
        authStatus: AuthorizationStatus.NoAuth,
      }
    });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const hotelCardListContainer = screen.getByTestId(hotelCrdListContainerTestId);

    expect(hotelCardListContainer).toBeInTheDocument();
  });

  it('should dispatch "setCurrentCardId" when the user hovered the mouse over the hotel card', () => {
    const articleContainer = 'hotel-card-list-article';
    const { withStoreComponent, mockStore } = withStore(<HotelCardList />, {
      OFFERS: {
        offers: fakeOffers,
        isOffersLoaded: false,
      },
      TOWN: {
        currentCity: fakeOffers[0].city,
      },
      SORTING: {
        sorting: SORT_TYPES[0],
      },
      AUTH: {
        authStatus: AuthorizationStatus.NoAuth,
      }
    });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const article = screen.getAllByTestId(articleContainer);

    fireEvent.mouseOver(article[0]);
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([setCurrentCardId.type]);
  });

  it('should dispatch "setCurrentCardId" when the user removed the mouse from the hotel card', () => {
    const articleContainer = 'hotel-card-list-article';
    const { withStoreComponent, mockStore } = withStore(<HotelCardList />, {
      OFFERS: {
        offers: fakeOffers,
        isOffersLoaded: false,
      },
      TOWN: {
        currentCity: fakeOffers[0].city,
      },
      SORTING: {
        sorting: SORT_TYPES[0],
      },
      AUTH: {
        authStatus: AuthorizationStatus.NoAuth,
      }
    });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const article = screen.getAllByTestId(articleContainer);

    fireEvent.mouseLeave(article[0]);
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([setCurrentCardId.type]);
  });
});
