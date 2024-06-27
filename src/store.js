import { configureStore } from '@reduxjs/toolkit';
import scrollSlice from './scrollSlice';

export const store = configureStore({
  reducer: {
    scroll: scrollSlice,
  },
});