import { Menu  } from '../menu/component';
import { Reviews } from '../reviews/component';

export const Restaurant = ({restaurant}) => {
    return (
    <li>
      <h2>{restaurant.name}</h2>
      <h3> Меню</h3>
      <Menu dishes = {restaurant.menu}/>
      <h3>Отзывы</h3>
      <Reviews reviews ={restaurant.reviews} />
    </li>
    );
}