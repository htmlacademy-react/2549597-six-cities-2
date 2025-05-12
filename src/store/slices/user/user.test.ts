import { UserData } from '../../../types/models';
import { user } from './user';
import { fakeUser } from '../../../test/mock';
import { dropUserData, setUserData } from './actions';

describe('User slice', () => {
  const state = {
    user: {} as UserData,
  };

  it ('should return initial state with empty action', () => {
    const emptyAction = { type: '' };

    const result = user.reducer(state, emptyAction);

    expect(result).toEqual(state);
  });

  it ('should return initial state with undefined action', () => {
    const emptyAction = { type: '' };

    const result = user.reducer(undefined, emptyAction);

    expect(result).toEqual(state);
  });

  it('should set user', () => {
    const expectedState = {
      user: fakeUser,
    };

    const result = user.reducer(state, setUserData(fakeUser));

    expect(result).toEqual(expectedState);
  });

  it('should drop user', () => {
    const initialState = {
      user: fakeUser,
    };
    const expectedState = {
      user: {} as UserData,
    };

    const result = user.reducer(initialState, dropUserData);

    expect(result).toEqual(expectedState);
  });

});
