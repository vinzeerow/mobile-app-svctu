import { configureStore } from '@reduxjs/toolkit';
import authReducer from './state/auth/reducer';
import { useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export const useAppSelector = (selector) => useSelector(selector);
export const useAppDispatch = () => useDispatch();

export default store;
