import { ReviewContainer } from '../review/container';
import styles from './styles.module.css'


export const Reviews = ({reviewIds}) => {

    
    return (

      <div>
        <h3>Отзывы</h3>
        <ul>
            {reviewIds.map ((reviewId) => 
              <ReviewContainer reviewId= {reviewId} className = {styles.review}/>
             )
              }
        </ul>
        
      </div>

    );
}