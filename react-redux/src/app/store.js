import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoslice';

export const store = configureStore({
  reducer: {
    todos: todoReducer, // key 'todos' can be anything, but should be descriptive
  },
});
