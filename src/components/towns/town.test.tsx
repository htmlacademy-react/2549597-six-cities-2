import { fireEvent, render, screen } from '@testing-library/react';
import { withStore } from '../../mock-component';
import { CITIES } from '../../constants';
import Town from './town';
import { extractActionsTypes } from '../../mock';
import { changeTown } from '../../store/slices/town-slice/town-slice';

describe('Component: Town', () => {
  const currentCity = CITIES[0];
  it('should render correct', () => {
    const townContainerTestId = 'town-container';
    const { withStoreComponent } = withStore(<Town town={currentCity} />, {
      TOWN: {
        currentCity: currentCity,
      }
    });

    render(withStoreComponent);
    const townContainer = screen.getByTestId(townContainerTestId);

    expect(townContainer).toBeInTheDocument();
  });

  it('should dispatch "changeTown" when user clicked on town', () => {
    const townContainerTestId = 'town-container';
    const { withStoreComponent, mockStore } = withStore(<Town town={currentCity} />, {
      TOWN: {
        currentCity: currentCity,
      }
    });

    render(withStoreComponent);
    const townContainer = screen.getByTestId(townContainerTestId);
    fireEvent.click(townContainer);
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([changeTown.type]);
  });

  it('should set class "tabs__item--active" when user clicked on town', () => {
    const townContainerTestId = 'town-container';
    const expectedClass = 'tabs__item--active';
    const hrefContainerTestId = 'href-container';
    const { withStoreComponent } = withStore(<Town town={currentCity} />, {
      TOWN: {
        currentCity: currentCity,
      }
    });

    render(withStoreComponent);
    const townContainer = screen.getByTestId(townContainerTestId);
    const hrefContainer = screen.getByTestId(hrefContainerTestId);
    fireEvent.click(townContainer);

    expect(hrefContainer).toHaveClass(expectedClass);
  });
});
