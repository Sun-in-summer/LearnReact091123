import { useEffect, useState } from 'react';
import { Layout } from '../../components/layout/component';
import { RestaurantTabsContainer } from '../../components/restaurantTabs/container';
import { RestaurantContainer } from '../../components/restaurant/container';
import { Restaurants } from '../../components/restaurants/component';
import { selectRestaurantsEntities } from '../../redux/features/enitites/restraurant/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../../redux/features/enitites/restraurant/thunks/get-restaurants';
import { getUsers } from '../../redux/features/enitites/user/thunks/get-users';

export const DEFAULT_RESTAURANT =  null;
export const ALL_RESTAURANTS = "ALL"
export const NO_RESTAURANTS = null;


export const RestaurantsPage = () => {

    const [activeRestaurantId, setActiveRestaurantId] =useState();
    const restaurantEntities = useSelector((state) => selectRestaurantsEntities(state)); 
    const restaurants = Object.values(restaurantEntities);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurants());
        dispatch(getUsers());
    }, [dispatch]);

    
 

    
    return (

    <Layout>
        <div>
            <RestaurantTabsContainer
                activeRestaurantId = {activeRestaurantId}
                onRestaurantSelect = {
                    (activeRestaurantId) => 
                        setActiveRestaurantId(activeRestaurantId)
                    }/>
        </div>
         {activeRestaurantId && activeRestaurantId !== ALL_RESTAURANTS && <RestaurantContainer restaurantId = {activeRestaurantId}/> }
         {activeRestaurantId === ALL_RESTAURANTS && <Restaurants restaurants={restaurants}/>}
    </Layout>
    );
}