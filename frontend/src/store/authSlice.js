import { createSlice } from '@reduxjs/toolkit';
import { login, logout } from './authThunk';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    userData: {},
  },
  reducers: {},
  extraReducers: {
    [logout.fulfilled]: (state, action) => {
      state.isAuthenticated = false;
      state.userData = {};
    },
    [login.pending]: (state, action) => {
      state.isAuthenticated = true;
    },
    [login.fulfilled]: (state, action) => {
      const { user } = action.payload;
      state.userData = user;
      state.isAuthenticated = true;
    },
    [login.rejected]: (state, action) => {
      state.isAuthenticated = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = authSlice.actions;

export default authSlice.reducer;
