import { useReducer } from 'react';
import { Counter } from '../counter/component';

const MIN_RATING = 1;
const MAX_RATING = 5;
const RATING_STEP = 0.5;


const DEFAULT_FORM_VALUE = {
    name: '',
    text: '',
    rating: 5
}

const ACTION_TYPES  ={
    setName: 'SET_NAME',
    setText: 'SET_TEXT',
    setRating: 'SET_RATING',
}


const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_NAME' :
      return {
        ...state, 
        name: action.payload, 
        text: DEFAULT_FORM_VALUE.text,
        rating: DEFAULT_FORM_VALUE.rating
        }  
    case 'SET_TEXT' :
      return {
        ...state,
        text: action.payload}  
    case 'SET_RATING' :
      return {
        ...state,
        rating: action.payload} ; 
    default:
      return state;
  }
}


export const ReviewForm = () => {

     const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

     return (
      <div>
        <div>
          <label htmlFor = 'name'>Name</label>
          <input 
            id ="name"
            type= 'text'
            value = {formValue.name}
            onChange = {(event) =>
              dispatch({type: ACTION_TYPES.setName, payload: event.target.value})}
            ></input>
        </div>
        <div>
          <label htmlFor = 'text'>Text</label>
          <input
            id ="text" 
            type= 'text'
            value ={formValue.text}
            onChange = {(event) => dispatch({ type: ACTION_TYPES.setText, payload: event.target.value})}
            ></input>
        </div>
        <div>
          <label htmlFor = 'rating'>Rating</label>
          <Counter
              value = {formValue.rating} 
              increment = {() =>dispatch({ type: ACTION_TYPES.setRating, payload: formValue.rating + RATING_STEP})}
              decrement = {() =>dispatch({ type: ACTION_TYPES.setRating, payload: formValue.rating - RATING_STEP})}
              min = {MIN_RATING}
              max= {MAX_RATING} />
          </div>
      </div>
  );
}