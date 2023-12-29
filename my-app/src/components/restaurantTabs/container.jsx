import { useSelector } from 'react-redux';
import { RestaurantTabs } from './component'
import { selectRestaurantIds } from '../../redux/features/enitites/restraurant/selectors';

export const RestaurantTabsContainer = ({onRestaurantSelect, activeRestaurantId}) => {

    const restaurantIds = useSelector((state) => selectRestaurantIds(state));

    return (
        <RestaurantTabs 
            activeRestaurantId = {activeRestaurantId}
            restaurantIds= {restaurantIds} 
            onRestaurantSelect = {onRestaurantSelect} 
        />
    );
}