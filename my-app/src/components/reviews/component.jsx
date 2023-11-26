import { Review } from '../review/component';

export const Reviews = ({reviews}) => {
    return (

      <ul>
        {reviews.map ((review) => <Review review= {review}/>)}
      </ul>

    );
}