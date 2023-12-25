import { Button } from '../button/component';


const MIN_COUNT = 0;
const MAX_COUNT = 5;

export const Counter =({value, increment, decrement, min = MIN_COUNT, max = MAX_COUNT}) => {

  
   return (
        <div>
            <Button onClick={decrement} disabled ={value <= min}>-</Button>
               {value} 
            <Button  onClick={increment} disabled = {value >= max}>+</Button>
        </div>
    )
} 