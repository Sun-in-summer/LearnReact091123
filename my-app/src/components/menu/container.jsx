import { selectDishesIdsByRestaurantId } from '../../redux/features/enitites/restraurant/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from './component';
import { useEffect } from 'react';
import { getDishes } from '../../redux/features/enitites/dish/thunks/get-dishes';
import { selectDishesLoadingStatus } from '../../redux/features/enitites/dish/selector';
import { REQUEST_STATUSES } from '../../constants/request-statuses';

export const MenuContainer = ({restaurantId, ...props}) => {

    

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getDishes(restaurantId));
    }, [dispatch, restaurantId])

    const dishesIds = useSelector((state) => selectDishesIdsByRestaurantId(state, restaurantId));
    const dishesLoadingStatus = useSelector((state) => selectDishesLoadingStatus(state));

    if (dishesLoadingStatus === REQUEST_STATUSES.pending) {
      return "Loading menu..."
    }


    
     return (

      <Menu {...props} dishesIds= {dishesIds}/>
    
    );
}