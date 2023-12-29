import { useDispatch, useSelector } from 'react-redux';
import { selectReviewsByRestaurantId } from '../../redux/features/enitites/restraurant/selectors';
import { Reviews } from './component';
import { getReviews } from '../../redux/features/enitites/review/thunks/get-reviews';
import { useEffect } from 'react';


export const ReviewsContainer = ({restaurantId}) => {

    const reviewIds  = useSelector((state) => selectReviewsByRestaurantId(state, restaurantId))

    const dispatch = useDispatch();
   

  

    return (

      <Reviews reviewIds = {reviewIds} />

    );
}