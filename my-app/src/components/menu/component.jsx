import { Dish } from '../dish/component';

export const Menu = ({dishes}) => {
     return (

      <div>
         <h3> Меню</h3>
         <ul>
            { dishes.map((dish) =><li><Dish dish= {dish.name}/></li> )} 
         </ul>
        
      </div>
    
    );
}