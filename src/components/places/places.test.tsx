import { render, screen } from '@testing-library/react';
import { SORT_TYPES } from '../../constants';
import { fakeOffers } from '../../mock';
import { withHistory, withStore } from '../../mock-component';
import Places from './places';

describe('Component: Places', () => {
  const offers = fakeOffers;
  it('should render correct', () => {
    const placesContainerTestId = 'places-contaner';
    const { withStoreComponent } = withStore(<Places />, {
      TOWN: {
        currentCity: offers[0].city,
      },
      OFFERS: {
        offers: offers,
        isOffersLoaded: false,
      },
      SORTING: {
        sorting: SORT_TYPES[0],
      }
    });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const placesContainer = screen.getByTestId(placesContainerTestId);

    expect(placesContainer).toBeInTheDocument();
  });
});
