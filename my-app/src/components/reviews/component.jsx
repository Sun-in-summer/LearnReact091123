import { useSelector } from 'react-redux';
import { Review } from '../review/component';
import styles from './styles.module.css'
import { selectReviewsByRestaurantId } from '../../redux/features/enitites/restraurant/selectors';

export const Reviews = ({restaurantId}) => {

    const reviewIds  = useSelector((state) => selectReviewsByRestaurantId(state, restaurantId))

    return (

      <div>
        <h3>Отзывы</h3>
        <ul>
            {reviewIds.map ((reviewId) => 
              <Review reviewId= {reviewId} className = {styles.review}/>
             )
              }
        </ul>
        
      </div>

    );
}