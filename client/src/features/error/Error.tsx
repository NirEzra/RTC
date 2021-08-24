import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import MyProducts from '../../MyProducts'

export interface CounterState {
  error: null
}

const initialState: CounterState = {
  error: null,
}

export const counterSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    got_error: (state, action: PayloadAction<any>) => {
      state.error = action.payload
      // console.log(state.products);   
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { got_error} = counterSlice.actions

export default counterSlice.reducer