import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../components/features/counterSlice';

export const store=configureStore({
  reducer:{
    counter:counterReducer,
  },
});