import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { AppRoute, AuthorizationStatus, CITIES, SORT_TYPES } from '../../constants';
import App from './app';
import { withHistory, withStore } from '../../mock-component';
import { UserData } from '../../types/models';
import { fakeCurrentOffer, fakeOffers, fakeReviews } from '../../mock';

describe('Application routing', () => {
  let mockHistory: MemoryHistory;
  const offers = fakeOffers;
  const currentOfferId = offers[0].id;
  const currentOffer = {...fakeCurrentOffer, id:currentOfferId};
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
    TOWN: {
      currentCity: CITIES[0],
    },
    SORTING: {
      sorting: SORT_TYPES[0],
    },
    CURRENT_CARD: {
      currentCard: currentOfferId,
    },
    FAVORITE_OFFERS: {
      favoriteOffers: [offers[0]],
    },
    CURRENT_OFFER: {
      currentOffer: currentOffer,
      isCurrentOfferLoaded: false,
      hasCurrentOfferError: false,
    },
    REVIEW: {
      reviews: fakeReviews,
      isReviewLoaded: false,
      hasReviewError: false,
    }
  };

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  // it('should render "MainScreen" when user navigate to "/"', () => {
  //   const withHistoryComponent = withHistory(<App />, mockHistory);
  //   const { withStoreComponent } = withStore(withHistoryComponent, store);
  //   mockHistory.push(AppRoute.Main);

  //   render(withStoreComponent);

  //   expect(screen.getByText('Places')).toBeInTheDocument();
  // });

  it('should render "LoginScreen" when user navigate to "/login"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, store);
    mockHistory.push(AppRoute.Login);

    render(withStoreComponent);

    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByText('E-mail')).toBeInTheDocument();
  });

  it('should render "FavoritesScreen" when user navigate to "/favorites" and user authorized', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, {...store,
      AUTH: {
        authStatus: AuthorizationStatus.Auth
      }});
    mockHistory.push(AppRoute.Favorites);

    render(withStoreComponent);

    expect(screen.getByText('Saved listing')).toBeInTheDocument();
  });

  it('should render "ErrorScreen" when user navigate to "/*"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, store);
    mockHistory.push(AppRoute.Error);

    render(withStoreComponent);

    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });

  it('should render "OfferScreen" when user navigate to "/offer/:id"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, store);
    mockHistory.push(`/offer/${currentOfferId}`);

    render(withStoreComponent);

    expect(screen.getByText('Other places in the neighbourhood')).toBeInTheDocument();
  });
});
