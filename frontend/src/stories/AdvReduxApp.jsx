import React, { useEffect, useState } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch } from 'react-redux';
import Button from './Button';

const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    SET_USER: (state, action) => {
      state.push({ user: action.payload });
    },
  },
});
const { SET_USER } = userSlice.actions;
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

const AdvReduxApp = () => {
  const dispatch = useDispatch();
  const user = useState([]);

  useEffect(() => {
    dispatch(SET_USER({ name: 'Park', age: 20 }));
  });

  return <Button>리덕스 예제</Button>;
};

export default AdvReduxApp;
