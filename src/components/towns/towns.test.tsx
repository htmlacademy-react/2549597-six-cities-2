import { render, screen } from '@testing-library/react';
import TownList from './towns';
import { withStore } from '../../test/mock-component';
import { CITIES } from '../../constants';
import { TestIdMarkups } from '../../test/testid-markup';

describe('Component: TownList', () => {
  it('should render TownList', () => {
    const { withStoreComponent } = withStore(<TownList />, {
      TOWN: {
        currentCity: CITIES[0],
      }
    });

    render(withStoreComponent);
    const townListContainer = screen.getByTestId(TestIdMarkups.TownListTestId);

    expect(townListContainer).toBeInTheDocument();
  });
});
