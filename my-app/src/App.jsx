import { RestaurantsPage } from './pages/restraurants-page/component';
import { Provider } from 'react-redux';

import './styles/index.css';
import store from './redux';


export const App =({restaurants}) => {
return (
     <Provider store = {store}>
        <RestaurantsPage restaurants={restaurants}/>
    </Provider>    
)



 }

 