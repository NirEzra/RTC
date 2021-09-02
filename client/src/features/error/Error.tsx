import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  error: null;
}

const initialState: CounterState = {
  error: null,
};

export const counterSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    got_error: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
  },
});

export const { got_error } = counterSlice.actions;

export default counterSlice.reducer;
