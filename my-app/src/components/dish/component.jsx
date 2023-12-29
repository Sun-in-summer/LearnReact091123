import {Counter} from "../counter/component";
// import { useState } from 'react';



export const Dish = ({dish, className}) => {
 


  return (
    <div className={className}>
        <div>{dish.name}</div>
      <div>
        <Counter 
          productId = {dish.id}
          // value = {amount}
          // increment={() => setAmount (amount + AMOUNT_STEP)}
          // decrement={()=> setAmount(amount - AMOUNT_STEP)}
          />
      </div>
    </div>
    );
}