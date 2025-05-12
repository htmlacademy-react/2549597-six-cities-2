import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { CurrentOffer } from '../../../types/models';
import { State } from '../../../types/state';

export const takeCurrentOffer = (state: Pick<State, NameSpace.CurrentOffer>) => state[NameSpace.CurrentOffer].currentOffer;
export const getCurrentOffer = createSelector([takeCurrentOffer], (offer: CurrentOffer) => offer);
