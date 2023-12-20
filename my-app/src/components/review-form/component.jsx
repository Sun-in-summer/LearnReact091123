import { useReducer } from 'react';

const DEFAULT_FORM_VALUE = {
    name: '',
    text: '',
    rating: 5
}


const ACTION_TYPES  ={
    setName: 'SET_NAME',
    setText: 'SET_TEXT',
    setRating: 'SET_RATING'
}

export const ReviewForm = () => {

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
              return {...state, text: action.payload}  
            case 'SET_RATING' :
              return {...state, rating: action.payload} ; 
            default:
                 return state;
        }
    }


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
            <input
             id ="rating" 
             type= 'number'
             value ={formValue.rating}
             onChange = {(event) => dispatch({ type: ACTION_TYPES.setRating, payload: event.target.value})}></input>
        </div>
      </div>

    );
}