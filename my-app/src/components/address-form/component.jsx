import { useReducer } from 'react';
import { useOrder } from '../order/hooks';



const DEFAULT_FORM_VALUE = {
    stret: '',
    house: '',
    flat: 0
}

const ACTION_TYPES  ={
    setStreet: 'SET_STREET',
    setHouse: 'SET_HOUSE',
    setFlat: 'SET_FLAT',
}


const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_STREET' :
      return {
        ...state, 
        street: action.payload, 
        }  
    case 'SET_HOUSE' :
      return {
        ...state,
        house: action.payload}  
    case 'SET_FLAT' :
      return {
        ...state,
        flat: action.payload} ; 
    default:
      return state;
  }
}


export const AddressForm = () => {

     const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

     const {forms, setAddress} =useOrder();

     return (
      <div>
        <div>
          <label htmlFor = 'street'> {forms.customer.name ? `${forms.customer.name}'s `: null}Street</label>
          <input 
            id ="street"
            type= 'text'
            value = {formValue.name}
            onChange = {(event) =>
              dispatch({type: ACTION_TYPES.setStreet, payload: event.target.value})}
            ></input>
        </div>
        <div>
          <label htmlFor = 'house'>House</label>
          <input
            id ="house" 
            type= 'text'
            value ={formValue.text}
            onChange = {(event) => dispatch({ type: ACTION_TYPES.setHouse, payload: event.target.value})}
            ></input>
        </div>
        <div>
          <label htmlFor = 'flat'>Flat</label>
          <input 
              id = "flat"
              type ="number"
              value = {formValue.flat} 
              onChange = {(event) =>dispatch({ type: ACTION_TYPES.setFlat, payload: event.target.value})}
            />
          </div>
          <button onClick = {() =>setAddress(formValue)}>Submit</button>
      </div>
  );
}