import { configureStore } from '@reduxjs/toolkit';
import { reviewSlice } from './features/enitites/review';
import { userSlice } from './features/enitites/user';
import { restaurantSlice } from './features/enitites/restraurant';
import { dishSlice } from './features/enitites/dish';


const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        restaurant: restaurantSlice.reducer,
        review: reviewSlice.reducer,
        dish: dishSlice.reducer,
    }
})

console.log(store.getState());

export default store;

