import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface CounterState {
  cartItems: any[];
  status: string;
}

const initialState: CounterState = {
  cartItems: [],
  status: "loading",
};

export const fetchItemById = createAsyncThunk(
  "items/fetchById",
  async (obj, { dispatch, getState }) => {
    // const data1: any = await axios
    //   .get(`https://jsonplaceholder.typicode.com/users`)
    // .then((res) => res.json());
    const state: any = getState();

    // const response:any = await fetch(`https://jsonplaceholder.typicode.com/users`)
    // .then((res) => res.json());
    // console.log(response);z

    // localStorage.setItem(
    //   "cartItems",
    //   JSON.stringify(state.cartItems)
    // );
  }
);

export const counterSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    cart_add_item: (state, action: PayloadAction<any>) => {
      const item = action.payload;
      console.log(item);

      // const existItem = state.cartItems.find((x) => x._id === item._id);
      // if (existItem) {
      //   state.cartItems = [
      //     ...state.cartItems,
      //     state.cartItems.map((x) => (x._id === existItem._id ? item : x)),
      //   ];
      // } else {
      //   state.cartItems = [...state.cartItems, action.payload];
      // }
      let existItem = state.cartItems.find((x) => x._id === item._id);
      if (existItem) {
        state.cartItems = [
          ...state.cartItems.map((x) => (x._id === existItem._id ? item : x)),
        ];
      } else {
        state.cartItems = [...state.cartItems, action.payload];
      }

      // state.cartItems = [...state.cartItems, action.payload];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    get_from_local: (state, action: PayloadAction<any>) => {
      const local = localStorage.getItem("cartItems");

      const cartItemsFromStorage = JSON.parse(local || "[]");

      state.cartItems = [...cartItemsFromStorage];
      // console.log(cartItemsFromStorage);

      // state.cartItems = [...state.cartItems ,...cartItemsFromStorage ]
      // console.log(cartItemsFromStorage);
    },
    add_item_onChange: (state, action: PayloadAction<any>) => {
      let existItem = state.cartItems.find(
        (x) => x._id === action.payload.item._id
      );
      existItem.qty = Number(action.payload.target);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchItemById.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(fetchItemById.fulfilled, (state, action) => {
      state.status = "success";

      state.cartItems = [...state.cartItems, action.payload];
    });

    builder.addCase(fetchItemById.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

// Action creators are generated for each case reducer function
export const { cart_add_item, get_from_local, add_item_onChange } =
  counterSlice.actions;

export default counterSlice.reducer;
