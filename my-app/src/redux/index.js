import { configureStore } from '@reduxjs/toolkit';
import { reviewSlice } from './features/enitites/review';
import { userSlice } from './features/enitites/user';
import { restaurantSlice } from './features/enitites/restraurant';
import { dishSlice } from './features/enitites/dish';
import { cartSlice } from './ui/cart';


const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        restaurant: restaurantSlice.reducer,
        review: reviewSlice.reducer,
        dish: dishSlice.reducer,
        cart: cartSlice.reducer,
    }, 
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
})

console.log(store.getState());

export default store;

