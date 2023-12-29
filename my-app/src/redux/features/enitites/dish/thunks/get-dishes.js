import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishes = createAsyncThunk(
  "dishes/getDishes",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId="${restaurantId}`
    );
    const result = await response.json();
    if (!result?.length) {
      console.log(result);
      return rejectWithValue("Empty dishes");
    }

    console.log(result);
    return result;
  },
  {
    // condition: (restaurantId, { getState }) =>
    //   !selectDishIds(getState(), restaurantId).length,
  }
);
