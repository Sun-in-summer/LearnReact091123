import { Menu  } from '../menu/component';
import { OrderFormGroup } from '../order-form-group/component';
import { ReviewForm } from '../review-form/component';
import { Reviews } from '../reviews/component';

export const Restaurant = ({restaurant}) => {

   if(!restaurant){
    return null;
   }
    return (
    <div>
      <h2>{restaurant.name}</h2>
     
      <Menu dishes = {restaurant.menu}/>
      
      <Reviews reviews ={restaurant.reviews} />
      <ReviewForm/>
      <OrderFormGroup />
    </div>
    );
}