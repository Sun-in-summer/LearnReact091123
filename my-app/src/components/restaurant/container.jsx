import { Restaurant } from "./component";
import { selectRestaurantById } from "../../redux/features/enitites/restraurant/selectors";
import { useSelector } from "react-redux";


export const RestaurantContainer = ({ restaurantId }) => {



  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return <Restaurant restaurant={restaurant}></Restaurant>;
};
