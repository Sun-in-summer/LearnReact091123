import { useState } from 'react';

const MIN_COUNT = 0;
const MAX_COUNT = 5;
const DEFAULT_COUNT = 0;


export const DishCounter =() => {

   const [count, setCount] =useState(DEFAULT_COUNT);
   

  const increaseCount = () => {
    if(count < MAX_COUNT) {
        return setCount (count + 1);
    }
    return setCount(MAX_COUNT)
  }

  const decreaseCount = () =>{
    if (count > MIN_COUNT) {
       return  setCount(count - 1);
    }
    return setCount(MIN_COUNT);
  }

  const handleCount = (quantity) =>{
    if(quantity > MAX_COUNT ) {
        return setCount(MAX_COUNT);
    }
    else if (quantity <MIN_COUNT) {
        return setCount(MIN_COUNT);
    }
    return setCount(quantity);
  }
   
   return (
        <div>
            <button onClick={()=> decreaseCount() } disabled ={count <= MIN_COUNT}>-</button>
            <input 
                value = {count}
                onChange = {(e)=> handleCount(e.target.value)}>
               
            </input>
            <button  onClick={()=>increaseCount() } disabled = {count >= MAX_COUNT}>+</button>
        </div>
    )
}