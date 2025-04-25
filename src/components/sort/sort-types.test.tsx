import { fireEvent, render, screen } from '@testing-library/react';
import { SORT_TYPES } from '../../constants';
import { withStore } from '../../mock-component';
import { SortingTypes } from './sort-types';
import { extractActionsTypes } from '../../mock';
import { setSorting } from '../../store/slices/sorting-slice/sorting-slice';

describe('Component: SortingTypes', () => {
  it('should render correct', () => {
    const sorting = SORT_TYPES[0];
    const sortTypesContainerTestId = 'sort-types=container';
    const { withStoreComponent } = withStore(<SortingTypes sort={sorting}/>, {
      SORTING: {
        sorting: sorting,
      }
    });

    render(withStoreComponent);
    const sortTypesContainer = screen.getByTestId(sortTypesContainerTestId);

    expect(sortTypesContainer).toBeInTheDocument();
  });

  it('should dispatch "setSorting" when user click on sorting', () => {
    const sorting = SORT_TYPES[0];
    const sortTypesContainerTestId = 'sort-types=container';
    const { withStoreComponent, mockStore } = withStore(<SortingTypes sort={sorting}/>, {
      SORTING: {
        sorting: sorting,
      }
    });

    render(withStoreComponent);
    const sortTypesContainer = screen.getByTestId(sortTypesContainerTestId);
    fireEvent.click(sortTypesContainer);
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([setSorting.type]);
  });
});
