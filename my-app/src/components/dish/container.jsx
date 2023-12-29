import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/features/enitites/dish/selector';
import { Dish } from './component';


export const DishContainer = ({dishId, className}) => {

  const dish = useSelector((state) => selectDishById(state, dishId))

  if(!dish) {
      return  null;
  }

  return (
    <Dish className = {className} dish= {dish}/>
    );
}