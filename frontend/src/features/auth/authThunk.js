import { createAsyncThunk } from '@reduxjs/toolkit';
import { call, signin, signout } from '../../service/ApiService';
import { getToken, setToken, removeToken } from '../../utils/HelperFunctions';

export const fetchUserData = createAsyncThunk(
  'auth/fetchUserData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await call('/api/accounts/user/');
      console.log(response);
      return response;
    } catch (err) {
      return rejectWithValue(err.detail);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await signin(payload);
      setToken(response.access_token);
      //history.push('/');
      return response;
    } catch (err) {
      alert(err.detail);
      return rejectWithValue(err.detail);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  const response = await signout();
  removeToken();
  //history.push('/login');
  return response;
});
