import { Restaurant } from "./component";
import { selectRestaurantById } from "../../redux/features/enitites/restraurant/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../redux/features/enitites/review/thunks/get-reviews";
import { useEffect } from "react";
import { getUsers } from "../../redux/features/enitites/user/thunks/get-users";

export const RestaurantContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews(restaurantId));
  }, [restaurantId, dispatch]);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return <Restaurant restaurant={restaurant}></Restaurant>;
};
