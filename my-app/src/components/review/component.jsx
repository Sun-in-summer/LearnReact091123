import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/features/enitites/review/selector';

export const Review = ({reviewId, className}) => {

    const review = useSelector((state) =>selectReviewById(state, reviewId));
    return (
        <div className={className}
        >{review.text}</div>

    );
}