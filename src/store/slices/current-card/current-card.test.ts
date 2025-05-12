import { currentCard, setCurrentCardId } from './current-card';
import { cardId } from '../../../test/mock';

describe('Current card slice', () => {
  const state = {
    currentCardId: '',
  };

  it ('should return initial state with empty action', () => {
    const emptyAction = { type: '' };

    const result = currentCard.reducer(state, emptyAction);

    expect(result).toEqual(state);
  });

  it ('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };

    const result = currentCard.reducer(undefined, emptyAction);

    expect(result).toEqual(state);
  });

  it ('should replace currentCard value on current', () => {
    const initialState = {currentCardId: ''};
    const expectedCardId = cardId;

    const result = currentCard.reducer(initialState, setCurrentCardId(expectedCardId));

    expect(result.currentCardId).toBe(expectedCardId);

  });

  it ('should return default value', () => {
    const initialState = {currentCardId: ''};
    const expectedCardId = '';

    const result = currentCard.reducer(initialState, setCurrentCardId(expectedCardId));

    expect(result.currentCardId).toBe(expectedCardId);
  });


});
