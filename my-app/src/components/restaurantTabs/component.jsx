import { ALL_RESTAURANTS } from '../../pages/restraurants-page/component';
import { RestaurantTabContainer } from '../restaurantTab/container';
import { Tab } from '../tab/component';
import styles from './styles.module.css'


export const RestaurantTabs = ({restaurantIds, onRestaurantSelect, activeRestaurantId}) => {

    return (<div>
        <Tab onClick = {()=>onRestaurantSelect(null)}   isActive = { activeRestaurantId === null} className={styles.tab}>Reset</Tab>
        <Tab onClick = {()=>onRestaurantSelect(ALL_RESTAURANTS) } isActive = { activeRestaurantId === ALL_RESTAURANTS} className={styles.tab}>All</Tab>
        {restaurantIds.map((restraurantId) =>
             <RestaurantTabContainer
                restaurantId = {restraurantId} 
                onClick={() => onRestaurantSelect(restraurantId)}
                isActive = {restraurantId === activeRestaurantId }
                className={styles.tab}
            />)}
    </div>);
}