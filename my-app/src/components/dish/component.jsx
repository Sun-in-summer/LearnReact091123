import { useSelector } from 'react-redux';
import {Counter} from "../counter/component";
import { useState } from 'react';
import { selectDishById } from '../../redux/features/enitites/dish/selector';

const AMOUNT_STEP = 1;
export const Dish = ({dishId, className}) => {

  const dish = useSelector((state) => selectDishById(state, dishId))

  const [amount, setAmount] = useState(0);

  if(!dish) {
      return  null;
  }


  return (
    <div className={className}>
        <div>{dish.name}</div>
      <div>
        <Counter 
          value = {amount}
          increment={() => setAmount (amount + AMOUNT_STEP)}
          decrement={()=> setAmount(amount - AMOUNT_STEP)}/>
      </div>
    </div>
    );
}