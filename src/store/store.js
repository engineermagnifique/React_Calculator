// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../components/features/counterSlice';
// import todoReducer from '../components/features/todoSlice';

// const loggerMiddleware = (store) => (next) => (action) => {
//   console.log("Action:", action);
//   const result = next(action);
//   console.log("Updated State:", store.getState());
//   return result;
// };

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     todo: todoReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(loggerMiddleware),
// });

import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./calculatorSlice";

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});