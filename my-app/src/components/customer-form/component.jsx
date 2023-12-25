import { useReducer } from 'react';
import { useOrder } from '../order/hooks';


const DEFAULT_FORM_VALUE = {
    name: '',
    surname: 5
}

const ACTION_TYPES  ={
    setName: 'SET_NAME',
    setSurname: 'SET_SURNAME',
}


const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_NAME' :
      return {
        ...state, 
        name: action.payload, 
        }  
    case 'SET_SURNAME' :
      return {
        ...state,
        surname: action.payload} ; 
    default:
      return state;
  }
}


export const CustomerForm = () => {

     const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

     const {setCustomer} = useOrder();

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
          <label htmlFor = 'surname'>Surname</label>
          <input
              id="surname"
              type='text'
              value = {formValue.rating} 
              onChange = {(event) =>dispatch({ type: ACTION_TYPES.setSurname, payload: event.target.value})}
             />
          </div>
          <button onClick = {() => setCustomer(formValue)} >
            Submit

          </button>
      </div>
  );
}