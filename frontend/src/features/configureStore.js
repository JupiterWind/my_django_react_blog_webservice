import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import auth from './auth/authSlice';
import { errorLoggerWithToast } from './middlewares/errorLoggerWithToast';

export default configureStore({
  reducer: {
    auth: auth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(errorLoggerWithToast),
});
