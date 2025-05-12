import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';


export const currentCard = createSlice({
  name: NameSpace.CurrentCard,
  initialState: {
    currentCardId: '',
  },
  reducers: {
    setCurrentCardId: (state, action: PayloadAction<string>) => {
      state.currentCardId = action.payload;
    },
  },
});

export const {setCurrentCardId} = currentCard.actions;
