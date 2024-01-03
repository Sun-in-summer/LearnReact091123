import { Layout } from '../../components/layout/component';
import { RestaurantTabsContainer } from '../../components/restaurantTabs/container';
import { RestaurantContainer } from '../../components/restaurant/container';
import { Restaurants } from '../../components/restaurants/component';

export const DEFAULT_RESTAURANT =  null;
export const ALL_RESTAURANTS = "ALL"
export const NO_RESTAURANTS = null;


export const RestaurantsPage = ({restaurants, activeRestaurantId, setActiveRestaurantId}) => {

   
    return (

    <Layout>
        <div>
            <RestaurantTabsContainer
                activeRestaurantId = {activeRestaurantId}
                onRestaurantSelect = {
                    (activeRestaurantId) => 
                        setActiveRestaurantId(activeRestaurantId)
                    }/>
        </div>
         {activeRestaurantId && activeRestaurantId !== ALL_RESTAURANTS && <RestaurantContainer restaurantId = {activeRestaurantId}/> }
         {activeRestaurantId === ALL_RESTAURANTS && <Restaurants restaurants={restaurants}/>}
    </Layout>
    );
}