import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 20
};

const slice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + action.payload;
    },
    decrement: (state, action) => {
      state.count = state.count - action.payload;
    },
    reset: (state, action) => {
      state.count = initialState.count;
    }
  }
});
export default slice.reducer;
export const { increment, decrement, reset } = slice.actions;
