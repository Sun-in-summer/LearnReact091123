import { useSelector } from 'react-redux';
import { Tab } from '../tab/component';
import { selectRestaurantById } from '../../redux/features/enitites/restraurant/selectors';

export const RestaurantTabContainer = ({restaurantId, onClick, isActive, className}) => {

    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

    return <Tab onClick = {onClick} isActive= {isActive} className={className}>{restaurant?.name }</Tab>;
}