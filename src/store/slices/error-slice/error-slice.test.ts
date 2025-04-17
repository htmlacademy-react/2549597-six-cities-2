import { describe, expect, it } from 'vitest';
import { errorSlice } from './error-slice';
import { fakeError } from '../../../mock';
import { setError } from './error-action';

describe('Error slice', () => {
  const state = {
    error: null,
  };

  it ('should return initial state with empty action', () => {
    const emptyAction = { type: '' };

    const result = errorSlice.reducer(state, emptyAction);

    expect(result).toEqual(state);
  });

  it ('should return initial state with undefined action', () => {
    const emptyAction = { type: '' };

    const result = errorSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(state);
  });

  it('should replace empty error on current error', () => {
    const initialState = {error: null};
    const expectedError = fakeError;

    const result = errorSlice.reducer(initialState, setError(expectedError));

    expect(result.error).toBe(expectedError);
  });

  it('should set empty error on empty error', () => {
    const initialState = state;
    const expectedError = null;

    const result = errorSlice.reducer(initialState, setError(expectedError));

    expect(result.error).toBe(expectedError);
  });
});
