import { fireEvent, render, screen } from '@testing-library/react';
import { SORT_TYPES } from '../../constants';
import { withStore } from '../../mock-component';
import Sorting from './sorting';

describe('Component: Sorting', () => {
  it('should render correct', () => {
    const sortingContainerTestId = 'sorting-container';
    const { withStoreComponent } = withStore(<Sorting />, {
      SORTING: {
        sorting: SORT_TYPES[0],
      }
    });

    render(withStoreComponent);
    const sortingContainer = screen.getByTestId(sortingContainerTestId);

    expect(sortingContainer).toBeInTheDocument();
  });

  it('should set class "places__options--opened" to unsortedList when user clicked on form', () => {
    const sortingContainerTestId = 'sorting-container';
    const ulContainerTestId = 'ul-container';
    const hiddenClass = 'places__options--opened';
    const { withStoreComponent } = withStore(<Sorting />, {
      SORTING: {
        sorting: SORT_TYPES[0],
      }
    });

    render(withStoreComponent);
    const sortingContainer = screen.getByTestId(sortingContainerTestId);
    const expectedClass = screen.getByTestId(ulContainerTestId);
    fireEvent.click(sortingContainer);

    expect(expectedClass).toHaveClass(hiddenClass);
  });

  it('should set and remove class "places__options--opened" to unsortedList when user two clicked on form', () => {
    const sortingContainerTestId = 'sorting-container';
    const ulContainerTestId = 'ul-container';
    const hiddenClass = 'places__options--opened';
    const { withStoreComponent } = withStore(<Sorting />, {
      SORTING: {
        sorting: SORT_TYPES[0],
      }
    });

    render(withStoreComponent);
    const sortingContainer = screen.getByTestId(sortingContainerTestId);
    const expectedClass = screen.getByTestId(ulContainerTestId);
    fireEvent.dblClick(sortingContainer);

    expect(expectedClass).not.toHaveClass(hiddenClass);
  });
});
