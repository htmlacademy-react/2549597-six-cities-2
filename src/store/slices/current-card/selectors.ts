import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { State } from '../../../types/state';

const takeCurrentCard = (state: Pick<State, NameSpace.CurrentCard>) => state[NameSpace.CurrentCard].currentCardId;

export const getCurrentCardId = createSelector([takeCurrentCard], (card: string) => card);
