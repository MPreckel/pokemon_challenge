import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scrollPosition: 0,
  getData: false,
};

const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScrollPosition: (state, action) => {
      state.scrollPosition = action.payload;
    },
    setGetData: (state, action) => {
      state.getData = action.payload;
    },
  },
});

export const { setScrollPosition, setGetData } = scrollSlice.actions;
export default scrollSlice.reducer;