import { createAsyncThunk } from "@reduxjs/toolkit";
// import { selectReviewsByRestaurantId } from "../../restraurant/selectors";
// import { selectReviewIds } from "../selector";
// import { selectReviewIds } from "../selector";

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    const result = await response.json();
    if (!result?.length) {
      return rejectWithValue("Empty reviews");
    }

    return result;
  },
  {
    // condition: (restaurantId, { getState }) => {
    //   const state = getState();
    //   const restaurantReviewIds = selectReviewsByRestaurantId(
    //     state,
    //     restaurantId
    //   );
    //   console.log(restaurantReviewIds);
    //   const reviewIds = selectReviewIds(state);
    //   console.log(reviewIds);
    //   return !restaurantReviewIds.every((id) => reviewIds.includes(id));
    // },
  }
);
