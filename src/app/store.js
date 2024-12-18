import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/Theme/ThemeSlice';
import rubrosReducer from '../features/Rubros/RubrosSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,

    rubros: rubrosReducer,
  },
});
