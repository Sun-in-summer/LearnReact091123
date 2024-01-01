import { useDispatch, useSelector } from 'react-redux';
import { selectReviewsByRestaurantId } from '../../redux/features/enitites/restraurant/selectors';
import { Reviews } from './component';
import { getReviews } from '../../redux/features/enitites/review/thunks/get-reviews';
import { useEffect } from 'react';


export const ReviewsContainer = ({restaurantId}) => {

  const dispatch = useDispatch();
  
  useEffect(() => dispatch(getReviews()), [dispatch]);
  
  const reviewIds  = useSelector((state) => selectReviewsByRestaurantId(state, restaurantId))

   if (!reviewIds){
    return null;
   }

  

    return (

      <Reviews reviewIds = {reviewIds} />

    );
}