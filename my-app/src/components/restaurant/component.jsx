import { useSelector } from 'react-redux';
import { Menu  } from '../menu/component';
import { OrderFormGroup } from '../order-form-group/component';
import { ReviewForm } from '../review-form/component';
import { Reviews } from '../reviews/component';
import { selectRestaurantById } from '../../redux/features/enitites/restraurant/selectors';

export const Restaurant = ({restaurantId}) => {

 

   const restaurant  = useSelector((state) => selectRestaurantById(state, restaurantId))

   if(!restaurant){
    return null;
   }
    return (
    <div>
      <h2>{restaurant.name}</h2>
     
      <Menu restaurantId = {restaurantId}/>
      
      <Reviews restaurantId ={restaurantId} />
      <ReviewForm/>
      <OrderFormGroup />
    </div>
    );
}