import { useState } from 'react';
import { RestaurantTabs} from '../../components/restaurantTabs/component';
import { Restaurant } from '../../components/restaurant/component';
import { Layout } from '../../components/layout/component';

export const DEFAULT_RESTAURANT =  null;


export const RestaurantsPage = () => {

    const [selectedRestaurantId, setSelectedRestaurantId] =useState();

    
    return (

    <Layout>
        <div>
            <RestaurantTabs 
                onRestaurantSelect = {
                    (restaurantId) => 
                        {setSelectedRestaurantId(restaurantId);
                        console.log(restaurantId)}
                    }/>
        </div>
         <Restaurant restaurantId = {selectedRestaurantId}/> 
    </Layout>
    );
}