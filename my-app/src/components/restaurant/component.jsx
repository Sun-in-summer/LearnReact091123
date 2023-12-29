import { MenuContainer } from '../menu/container';
import { OrderFormGroup } from '../order-form-group/component';
import { ReviewForm } from '../review-form/component';
import { ReviewsContainer } from '../reviews/container';


export const Restaurant = ({restaurant}) => {

  

   if(!restaurant){
    return null;
   }
    return (
    <div>
      <h2>{restaurant.name}</h2>  
      <MenuContainer restaurantId = {restaurant.id}/>
      <ReviewsContainer restaurantId ={restaurant.id} />
      <ReviewForm/>
      <OrderFormGroup />
    </div>
    );
}