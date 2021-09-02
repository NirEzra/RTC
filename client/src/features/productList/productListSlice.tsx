import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import MyProducts from "../../MyProducts";

export interface CounterState {
  products: any[];
}

const initialState: CounterState = {
  products: [],
};

export const counterSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    product_list_request: (state) => {
      state.products = MyProducts;
      // console.log(state.products);
    },
    product_list_success: (state) => {},
    product_list_fail: (state, action: PayloadAction<any>) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { product_list_request, product_list_success, product_list_fail } =
  counterSlice.actions;

export default counterSlice.reducer;
