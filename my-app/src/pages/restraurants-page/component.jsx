import { RestaurantNames } from '../../components/restaurantNames/component';
import { Restaurants } from '../../components/restaurants/component';

export const RestaurantsPage = ({restaurants}) => {
    const restaurantNames = restaurants.map((restaurant) => restaurant.name);
    return <div>
        <div>
            <RestaurantNames 
                restaurantNames={restaurantNames}
                onRestaurantNameSelect = {(restaurantName) => console.log(restaurantName)}/>
        </div>
        <Restaurants restaurants={restaurants}/>
    </div>
}