import { useDispatch, useSelector } from 'react-redux';
import { selectReviewsByRestaurantId } from '../../redux/features/enitites/restraurant/selectors';
import { Reviews } from './component';
import { getReviews } from '../../redux/features/enitites/review/thunks/get-reviews';
import { useEffect } from 'react';
import { getUsers } from '../../redux/features/enitites/user/thunks/get-users';
import { selectReviewsLoadingStatus } from '../../redux/features/enitites/review/selector';
import { REQUEST_STATUSES } from '../../constants/request-statuses';


export const ReviewsContainer = ({restaurantId}) => {

  const dispatch = useDispatch();
  const reviewIds  = useSelector((state) => selectReviewsByRestaurantId(state, restaurantId));
  const reviewLoadingStatus = useSelector((state) => selectReviewsLoadingStatus(state));
  
  useEffect(() => {
    dispatch(getReviews(restaurantId));
    dispatch(getUsers())
  }, [dispatch, restaurantId]);
  
  

   if (!reviewIds | reviewLoadingStatus === REQUEST_STATUSES.pending ) {
        return    "Loading reviews...";
    }

      return (

      <Reviews reviewIds = {reviewIds} />

    );
}