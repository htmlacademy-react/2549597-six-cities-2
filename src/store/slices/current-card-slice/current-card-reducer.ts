import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { State } from '../../../types/state';

const currentCard = (state: Pick<State, NameSpace.CurrentCard>) => state[NameSpace.CurrentCard].currentCard;

export const getCurrentCardId = createSelector([currentCard], (card: string) => card);
