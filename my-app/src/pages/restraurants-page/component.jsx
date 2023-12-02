import { useState } from 'react';
import { RestaurantNames } from '../../components/restaurantNames/component';
import { Restaurant } from '../../components/restaurant/component';

export const DEFAULT_RESTAURANT =  null;


export const RestaurantsPage = ({restaurants}) => {
    const restaurantNames = restaurants.map((restaurant) => restaurant.name);
    const [selectedRestaurantName, setSelectedRestaurantName] =useState();

    
    let foundRestaurant = restaurants.find((restaurant) => restaurant.name === selectedRestaurantName)  ;

    if (!foundRestaurant ) {
        foundRestaurant = DEFAULT_RESTAURANT;
    }


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
         <Restaurant restaurant={foundRestaurant}/> 
    </div>
    );
}