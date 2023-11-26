import {RestaurantName} from './../restaurantName/component';

export const RestaurantNames = ({restaurantNames, onRestaurantNameSelect}) => {
    return (<div>
        {restaurantNames.map((restraurantName) =>
             <RestaurantName
                name= {restraurantName} 
                onClick={() => onRestaurantNameSelect(restraurantName)}
            />)}
    </div>);
}