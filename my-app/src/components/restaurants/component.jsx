import {Restaurant} from './../restaurant/component';

export const Restaurants = ({restaurants}) => {
    return (
    <ul>
        {restaurants.map((restaurant) =>
            <Restaurant restaurant= {restaurant} />)}
    </ul>);
}