import { useContext } from 'react'
import { OrderContext } from './context'

export const  useOrder  =() => {
   return useContext(OrderContext);
}