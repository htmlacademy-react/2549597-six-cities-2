import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace, SORT_TYPES } from '../../../constants';
import { SortTypes } from '../../../types/models';

export const sorting = createSlice({
  name: NameSpace.Sorting,
  initialState: {
    sorting: SORT_TYPES[0],
  },
  reducers: {
    setSorting: (state, action: PayloadAction<SortTypes>) => {
      state.sorting = action.payload;
    }
  },
});

export const {setSorting} = sorting.actions;
