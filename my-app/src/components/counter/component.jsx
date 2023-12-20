

const MIN_COUNT = 0;
const MAX_COUNT = 5;

export const Counter =({value, increment, decrement, min = MIN_COUNT, max = MAX_COUNT}) => {

  
   return (
        <div>
            <button onClick={decrement} disabled ={value <= min}>-</button>
               {value} 
            <button  onClick={increment} disabled = {value >= max}>+</button>
        </div>
    )
} 