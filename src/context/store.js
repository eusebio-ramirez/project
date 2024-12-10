// store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './ThemeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
