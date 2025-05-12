import { NameSpace } from '../../../constants';
import { UserData } from '../../../types/models';
import { getUserData } from './selectors';
import { fakeUser } from '../../../test/mock';


describe('User selectors', () => {
  it('should return user as {}', () => {
    const state = {
      [NameSpace.User]: {
        user: {} as UserData,
      }
    };
    const expectedState = {};

    const result = getUserData(state);

    expect(result).toEqual(expectedState);

  });

  it('should return user', () => {
    const state = {
      [NameSpace.User]: {
        user: fakeUser,
      }
    };
    const expectedState = fakeUser;

    const result = getUserData(state);

    expect(result).toBe(expectedState);

  });
});
