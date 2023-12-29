import { UserContainer } from '../user/container';

export const Review = ({review, className}) => {

    console.log(review);


  
    return (
        <div className={className}
        >{review.text}

        <UserContainer userId = {review.userId} /> 
        </div>

    );
}