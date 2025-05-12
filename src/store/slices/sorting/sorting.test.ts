import { SORT_TYPES } from '../../../constants';
import { setSorting, sorting } from './sorting';

describe('Sorting slice', () => {
  const state = {
    sorting: SORT_TYPES[0],
  };

  it ('should return initial state with empty action', () => {
    const emptyAction = { type: '' };

    const result = sorting.reducer(state, emptyAction);

    expect(result).toEqual(state);
  });

  it ('should return initial state with undefined action', () => {
    const emptyAction = { type: '' };

    const result = sorting.reducer(undefined, emptyAction);

    expect(result).toEqual(state);
  });

  it('should set new sorting', () => {
    const initialState = {
      sorting: SORT_TYPES[0],
    };
    const expectedState = {
      sorting: SORT_TYPES[2],
    };

    const result = sorting.reducer(initialState, setSorting(SORT_TYPES[2]));

    expect(result).toEqual(expectedState);
  });

});
