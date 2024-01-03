// import { RestaurantsPage } from './pages/restraurants-page/component';
import { Provider } from 'react-redux';
import { RestaurantPageContainer } from './pages/restraurants-page/container';

import './styles/index.css';
import store from './redux';


export const App =() => {
return (
     <Provider store = {store}>
        <RestaurantPageContainer />
    </Provider>    
)
 }

 