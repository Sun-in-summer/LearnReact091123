import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../button/component';
import { selectProductAmount } from '../../redux/ui/cart/selector';
import { cartActions } from '../../redux/ui/cart';


const MIN_COUNT = 0;
const MAX_COUNT = 5;

export const Counter =({productId, min = MIN_COUNT, max = MAX_COUNT}) => {

    const amount = useSelector((state) => selectProductAmount(state, productId ));
    const dispatch = useDispatch();
    const decrement = () => dispatch(cartActions.decrement(productId));
    const increment =() => dispatch(cartActions.increment(productId));


  
   return (
        <div>
            <Button onClick={decrement} disabled ={amount <= min}>-</Button>
               {amount} 
            <Button  onClick={increment} disabled = {amount >= max}>+</Button>
        </div>
    )
} 