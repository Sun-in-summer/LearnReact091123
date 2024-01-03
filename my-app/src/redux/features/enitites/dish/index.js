import { createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./thunks/get-dishes";
import { REQUEST_STATUSES } from "../../../../constants/request-statuses";

export const dishSlice = createSlice({
  name: "dishSlice",
  initialState: {
    entities: {},
    ids: [],
    status: REQUEST_STATUSES.idle,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        state.entities = payload.reduce((acc, dish) => {
          acc[dish.id] = dish;
          return acc;
        }, {});
        state.ids = Array.from(
          new Set([...state.ids, ...payload.map(({ id }) => id)])
        );

        state.status = REQUEST_STATUSES.fulfilled;
      })
      .addCase(getDishes.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      }),
});
