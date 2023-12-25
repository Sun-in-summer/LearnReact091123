import {Tab} from '../tab/component';

export const RestaurantTabs = ({restaurantNames, onRestaurantNameSelect}) => {
    return (<div>
        {restaurantNames.map((restraurantName) =>
             <Tab
                name= {restraurantName} 
                onClick={() => onRestaurantNameSelect(restraurantName)}
            />)}
    </div>);
}