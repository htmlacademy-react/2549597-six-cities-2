import { createSlice } from '@reduxjs/toolkit';
import { UserData } from '../../../types/models';
import { dropUserData, setUserData } from './actions';
import { NameSpace } from '../../../constants';

export const user = createSlice({
  name: NameSpace.User,
  initialState: {
    user: {} as UserData,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setUserData, (state, action) => {
        state.user = action.payload;
      })
      .addCase(dropUserData, (state) => {
        state.user = {} as UserData;
      });
  }
});
