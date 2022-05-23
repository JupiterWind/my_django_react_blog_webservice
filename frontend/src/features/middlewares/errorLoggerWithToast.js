import { isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const errorLoggerWithToast = (api) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    toast.error(action.payload, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }
  return next(action);
};
