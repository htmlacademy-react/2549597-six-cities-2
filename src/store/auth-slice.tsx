import { createSlice } from '@reduxjs/toolkit';
import { requireAuthorization } from './action';
import { AuthStatus } from '../types/models';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authStatus: 'UNKNOWN' as AuthStatus,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requireAuthorization, (state, action) => {
        state.authStatus = action.payload;
      });
  }
});
