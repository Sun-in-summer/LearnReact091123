import {DishCounter} from "../dish-counter/component";
export const Dish = ({dish}) => {
     return (
      <div>
         <div>{dish}</div>
        <div><DishCounter /></div>
      </div>
      

    );
}