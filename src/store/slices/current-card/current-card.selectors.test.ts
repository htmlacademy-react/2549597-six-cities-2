import { NameSpace } from '../../../constants';
import { cardId } from '../../../test/mock';
import { getCurrentCardId } from './selectors';

describe('Current card selectors', () => {
  it('should return current card from state', () => {
    const state = {
      [NameSpace.CurrentCard]: {
        currentCardId: cardId,
      }
    };
    const currentCard = cardId;

    const result = getCurrentCardId(state);

    expect(result).toBe(currentCard);
  });

});

