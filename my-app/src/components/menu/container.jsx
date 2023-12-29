import { selectDishesIdsByRestaurantId } from '../../redux/features/enitites/restraurant/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from './component';
import { useEffect } from 'react';
import { getDishes } from '../../redux/features/enitites/dish/thunks/get-dishes';

export const MenuContainer = ({restaurantId, ...props}) => {

    const dishesIds = useSelector((state) => selectDishesIdsByRestaurantId(state, restaurantId));

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getDishes(restaurantId));
    }, [dispatch, restaurantId])

    
     return (

      <Menu {...props} dishesIds= {dishesIds}/>
    
    );
}