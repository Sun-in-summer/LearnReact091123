import classNames from 'classnames';
import { Dish } from '../dish/component';
import styles from './styles.module.css';
import { selectDishesIdsByRestaurantId } from '../../redux/features/enitites/restraurant/selectors';
import { useSelector } from 'react-redux';

export const Menu = ({restaurantId, className}) => {

    const dishesIds = useSelector((state) => selectDishesIdsByRestaurantId(state, restaurantId));

    
     return (

      <div className={classNames(styles.root, className)}>
         <h3> Меню</h3>
         <ul>
            { dishesIds.map((dishId) =>
               
                  <Dish
                     dishId= {dishId} 
                     className={styles.dish}
                  />
               )} 
         </ul>
        
      </div>
    
    );
}