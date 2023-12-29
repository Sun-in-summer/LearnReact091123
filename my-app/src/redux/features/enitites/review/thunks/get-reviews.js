import { createAsyncThunk } from "@reduxjs/toolkit";
// import { selectReviewIds } from "../selector";

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    const result = await response.json();
    console.log("result1 in reviews", result);
    if (!result?.length) {
      return rejectWithValue("Empty reviews");
    }

    return result;
  },
  {
    // condition: (restaurantId, { getState }) =>
    //   !selectReviewIds(getState(), restaurantId).length,
  }
);
