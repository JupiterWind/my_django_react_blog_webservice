import { createAsyncThunk } from '@reduxjs/toolkit';
import { call, signin } from '../service/ApiService';
import { getToken, setToken, removeToken } from '../utils/HelperFunctions';

export const fetchUserData = createAsyncThunk(
  'auth/fetchUserData',
  async (userDTO, { rejectWithValue }) => {
    try {
      const response = await signin(userDTO);
      return response.data;
    } catch (e) {
      return rejectWithValue('');
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await call('/api/accounts/login/', 'POST', payload);
      setToken(response.access_token);
      window.location.href = '/';
      return response.data;
    } catch (err) {
      alert(err.detail);
      return rejectWithValue(err.response);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  const response = await call('/api/accounts/logout/', 'POST');
  removeToken();
  window.location.href = '/login';
  return response.data;
});
