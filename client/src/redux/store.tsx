import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/counter/counterSlice";
import productLisReducer from "../features/productList/productListSlice";
import ErrorReducer from "../features/error/Error";
import loadingReducer from "../features/loading/loading";
import cartItemsReducer from '../features/cartItems/CartItems'
import ProductDetailsReducer from "../features/productDetails/ProductDetails";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    productList: productLisReducer,
    error: ErrorReducer,
    loading: loadingReducer,
    cartItems:cartItemsReducer,
    productDetails:ProductDetailsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
