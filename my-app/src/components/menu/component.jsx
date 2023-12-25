import classNames from 'classnames';
import { Dish } from '../dish/component';
import styles from './styles.module.css';

export const Menu = ({dishes, className}) => {
     return (

      <div className={classNames(styles.root, className)}>
         <h3> Меню</h3>
         <ul>
            { dishes.map((dish) =>
               
                  <Dish
                     dish= {dish.name} 
                     className={styles.dish}
                  />
               )} 
         </ul>
        
      </div>
    
    );
}