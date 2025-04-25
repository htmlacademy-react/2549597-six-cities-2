import { render, screen } from '@testing-library/react';
import { fakeOffers } from '../../mock';
import { withHistory, withStore } from '../../mock-component';
import { MainScreenHOC } from './main-screen-hoc';
import { AuthorizationStatus, SORT_TYPES } from '../../constants';
import { UserData } from '../../types/models';

describe('Component: MainScreenHOC', () => {
  const offers = fakeOffers;
  const store = {
    OFFERS: {
      offers: offers,
      isOffersLoaded: false,
    },
    TOWN: {
      currentCity: offers[0].city,
    },
    SORTING: {
      sorting: SORT_TYPES[0],
    },
    AUTH: {
      authStatus: AuthorizationStatus.NoAuth,
    },
    USER: {
      user: {} as UserData,
    }
  };

  it('should render correct', () => {
    const expectedText = 'container';
    const component = () => <div>{expectedText}</div>;
    const ComponentWithHOC = MainScreenHOC(component);
    const { withStoreComponent } = withStore(<ComponentWithHOC />, store);

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render incorrect', () => {
    const notExpectedText = 'container';
    const component = () => <div>{notExpectedText}</div>;
    const ComponentWithHOC = MainScreenHOC(component);
    const { withStoreComponent } = withStore(<ComponentWithHOC />, {...store,
      OFFERS: {
        offers: [],
        isOffersLoaded: false,
      }});
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);

    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });
});
