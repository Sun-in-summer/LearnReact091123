import { Dish } from '../dish/component';

export const Menu = ({dishes}) => {
     return (

      <ul>
        { dishes.map((dish) => <Dish dish= {dish.name}/>)} 
      </ul>
    
    );
}