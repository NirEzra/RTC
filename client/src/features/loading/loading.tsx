import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  loading: boolean;
}

const initialState: CounterState = {
  loading: false,
};

export const counterSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    IsLoading: (state) => {
      state.loading = true;
    },
  },
});


export const { IsLoading } = counterSlice.actions;

export default counterSlice.reducer;
