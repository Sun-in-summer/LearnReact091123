import { createSlice } from "@reduxjs/toolkit";

const AMOUNT_STEP = 1;

export const cartSlice = createSlice({
  name: " cart",
  initialState: {},
  reducers: {
    increment: (state, action) => {
      return { 
        ...state,
        [action.payload]: (state[action.payload] + AMOUNT_STEP  || 0   ) };
    },
    decrement: (state, action) => {
      return { 
        ...state,
      [action.payload]: (state[action.payload] > 0 ?  state[action.payload] - AMOUNT_STEP  : 0  ) };
    },
  },
});

export const cartActions = cartSlice.actions;
