import { useSelector } from "react-redux";
import { Button } from "../button/component";
import { selectRestaurantById } from "../../redux/features/enitites/restraurant/selectors";

export const Tab = ({ id, onClick }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  return <Button onClick={onClick}> {restaurant.name}</Button>;
};
