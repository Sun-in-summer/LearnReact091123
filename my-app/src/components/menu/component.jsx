import classNames from 'classnames';
import styles from './styles.module.css';
import { DishContainer } from '../dish/container';


export const Menu = ({dishesIds, className}) => {

    
    
     return (

      <div className={classNames(styles.root, className)}>
         <h3> Меню</h3>
         <ul>
            { dishesIds.map((dishId) =>
               
                  <DishContainer
                     dishId= {dishId} 
                     className={styles.dish}
                  />
               )} 
         </ul>
        
      </div>
    
    );
}