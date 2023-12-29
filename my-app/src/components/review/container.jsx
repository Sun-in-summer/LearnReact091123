import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/features/enitites/review/selector';
import { Review } from './component';

export const ReviewContainer = ({reviewId, className}) => {

    const review = useSelector((state) =>selectReviewById(state, reviewId));
  
    return (
        <Review review= {review} className={ className}/>

    );
}