import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../components/features/counterSlice';
import todoReducer from '../components/features/todoSlice';

export const store=configureStore({
  reducer:{
    counter:counterReducer,
    todo:todoReducer,
  },
});