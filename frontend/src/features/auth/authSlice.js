import { createSlice } from '@reduxjs/toolkit';
import { fetchUserData, login, logout } from './authThunk';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    userData: {},
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    clearState: (state) => {
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.userData = user;
        state.isAuthenticated = true;
      })
      .addCase(fetchUserData.rejected, (state, action) => {})
      .addCase(logout.fulfilled, (state, action) => {
        state.isAuthenticated = false;
        state.userData = {};
      })
      .addCase(logout.pending, (state) => {
        state.isAuthenticated = true;
      })
      .addCase(login.pending, (state, action) => {})
      .addCase(login.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.userData = user;
        state.isAuthenticated = true;
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { clearState } = authSlice.actions;
export default authSlice.reducer;
