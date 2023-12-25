import { Review } from '../review/component';
import styles from './styles.module.css'

export const Reviews = ({reviews}) => {
    return (

      <div>
        <h3>Отзывы</h3>
        <ul>
            {reviews.map ((review) => 
              <Review review= {review} className = {styles.review}/>
             )
              }
        </ul>
        
      </div>

    );
}