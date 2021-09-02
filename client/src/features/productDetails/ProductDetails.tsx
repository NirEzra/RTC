import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import MyProducts from "../../MyProducts";

export interface CounterState {
  product: object;
  loading: boolean;
  error:string
}

const initialState: CounterState = {
  product: {},
  loading: true,
  error:""
};

export const listProductDetails = createAsyncThunk(
  "product/listProductDetails",
  async (obj, { dispatch, getState }) => {

  }
);


export const productDetailsSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    product_detals_request: (state) => {
      state.product = MyProducts;
      // console.log(state.products);
    },
    product_detals_success: (state) => {},
    product_detals_fail: (state, action: PayloadAction<any>) => {
      state.product = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(listProductDetails.pending, (state, action) => {
      state.loading = true;

    });

    builder.addCase(listProductDetails.fulfilled, (state, action) => {
      state.loading = false;
      
    //   state.product = action.payload;
    });

    builder.addCase(listProductDetails.rejected, (state, action) => {
      state.loading = false;
      
    });
  },
});

export const { product_detals_request } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
