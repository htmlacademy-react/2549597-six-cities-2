import {AuthorizationStatus} from './constants';
import { Result } from './types';

export const authorization = (auth: AuthorizationStatus, trueResult: Result, falseResult: Result) => {
  if (auth === AuthorizationStatus.Auth) {
    return trueResult;
  }

  return falseResult;
};
