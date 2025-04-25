import { render, screen } from '@testing-library/react';
import TownList from './town-list';
import { withStore } from '../../mock-component';
import { CITIES } from '../../constants';

describe('Component: TownList', () => {
  it('should render correct', () => {
    const townListContainerTestId = 'town-list-container';
    const { withStoreComponent } = withStore(<TownList />, {
      TOWN: {
        currentCity: CITIES[0],
      }
    });

    render(withStoreComponent);
    const townListContainer = screen.getByTestId(townListContainerTestId);

    expect(townListContainer).toBeInTheDocument();
  });
});
