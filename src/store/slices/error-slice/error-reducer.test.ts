import { describe, expect, it } from 'vitest';
import { NameSpace } from '../../../constants';
import { fakeError } from '../../../mock';
import { getCurrentError } from './error-reducer';

describe('Error reducer', () => {
  it('should return empty error', () => {
    const state = {
      [NameSpace.Error]: {
        error: null,
      }
    };
    const expectedError = null;

    const result = getCurrentError(state);

    expect(result).toEqual(expectedError);

  });

  it('should return error text', () => {
    const state = {
      [NameSpace.Error]: {
        error: fakeError,
      }
    };
    const expectedError = fakeError;

    const result = getCurrentError(state);

    expect(result).toEqual(expectedError);
  });
});
