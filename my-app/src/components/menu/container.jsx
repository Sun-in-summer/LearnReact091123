import { selectDishesIdsByRestaurantId } from '../../redux/features/enitites/restraurant/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from './component';
import { useEffect } from 'react';
import { getDishes } from '../../redux/features/enitites/dish/thunks/get-dishes';

export const MenuContainer = ({restaurantId, ...props}) => {

    

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getDishes(restaurantId));
    }, [dispatch, restaurantId])

    const dishesIds = useSelector((state) => selectDishesIdsByRestaurantId(state, restaurantId));

    
     return (

      <Menu {...props} dishesIds= {dishesIds}/>
    
    );
}