import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  grayscale: JSON.parse(localStorage.getItem('grayscale')) || false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleGrayscale: (state) => {
      state.grayscale = !state.grayscale;
      localStorage.setItem('grayscale', JSON.stringify(state.grayscale));
    },
  },
});

export const { toggleGrayscale } = themeSlice.actions;

export default themeSlice.reducer;