import { useEffect, useState } from 'react';
import { getRestaurants } from '../../redux/features/enitites/restraurant/thunks/get-restaurants';
import { getUsers } from '../../redux/features/enitites/user/thunks/get-users';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantsEntities, selectRestaurantsLoadingStatus } from '../../redux/features/enitites/restraurant/selectors';
import { RestaurantsPage } from './component';
import { REQUEST_STATUSES } from '../../constants/request-statuses';

export const RestaurantPageContainer = ()=> {
   

    const dispatch = useDispatch();
    
    const [activeRestaurantId, setActiveRestaurantId] =useState();
    const restaurantEntities = useSelector((state) => selectRestaurantsEntities(state)); 
    const restaurants = Object.values(restaurantEntities);
    const loadingRestaurantsStatus = useSelector((state) =>selectRestaurantsLoadingStatus(state));

  
    useEffect(() => {
        dispatch(getRestaurants());
        dispatch(getUsers());
    }, [dispatch]);

    if( loadingRestaurantsStatus === REQUEST_STATUSES.pending) {
        return "Loading...";
    }

      


    return  <RestaurantsPage 
        restaurants={restaurants}  
        activeRestaurantId = {activeRestaurantId} 
        setActiveRestaurantId = {setActiveRestaurantId} 
    />

}