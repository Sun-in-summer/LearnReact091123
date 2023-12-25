import { useSelector } from 'react-redux';
import {Tab} from '../tab/component';
import { selectRestaurantIds } from '../../redux/features/enitites/restraurant/selectors';

export const RestaurantTabs = ({ onRestaurantSelect}) => {

    const restaurantIds = useSelector((state) => selectRestaurantIds(state));

    return (<div>
        {restaurantIds.map((restraurantId) =>
             <Tab
                id = {restraurantId} 
                onClick={() => onRestaurantSelect(restraurantId)}
            />)}
    </div>);
}