import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selector";
import { selectDishesIdsByRestaurantId } from "../../restraurant/selectors";

export const getDishes = createAsyncThunk(
  "dishes/getDishes",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId="${restaurantId}`
    );
    const result = await response.json();
    if (!result?.length) {
      return rejectWithValue("Empty dishes");
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantDishIds = selectDishesIdsByRestaurantId(
        state,
        restaurantId
      );
      const dishIds = selectDishIds(state);
      return !restaurantDishIds.every((id) => dishIds.includes(id));
    },
  }
);
