import {Counter} from "../counter/component";
import { useState } from 'react';

const AMOUNT_STEP = 1;
export const Dish = ({dish, className}) => {

  const [amount, setAmount] = useState(0);

  if(!dish) {
      return  null;
  }


  return (
    <div className={className}>
        <div>{dish}</div>
      <div>
        <Counter 
          value = {amount}
          increment={() => setAmount (amount + AMOUNT_STEP)}
          decrement={()=> setAmount(amount - AMOUNT_STEP)}/>
      </div>
    </div>
    );
}