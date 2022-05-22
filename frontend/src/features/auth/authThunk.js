import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { call, signin, signout } from '../../service/ApiService';

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
      const response = await axios.post('/api/accounts/login', payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/accounts/logout', payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/accounts/register', payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
