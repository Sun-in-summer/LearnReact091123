import { useState } from 'react';
import { RestaurantNames } from '../../components/restaurantNames/component';
import { Restaurants } from '../../components/restaurants/component';

export const DEFAULT_RESTAURANT =  null;


export const RestaurantsPage = ({restaurants}) => {
    const restaurantNames = restaurants.map((restaurant) => restaurant.name);
    const [selectedRestaurantName, setSelectedRestaurantName] =useState();
    
    const filteredRestaurants = restaurants.filter((restaurant) => restaurant.name === selectedRestaurantName || DEFAULT_RESTAURANT);

    if (!restaurants.length) {
        return null;
    }
    return (
    <div>
        <div>
            <RestaurantNames 
                restaurantNames={restaurantNames}
                onRestaurantNameSelect = {
                    (restaurantName) => 
                        setSelectedRestaurantName(restaurantName)
                    }/>
        </div>
         <Restaurants restaurants={filteredRestaurants}/> 
    </div>
    );
}