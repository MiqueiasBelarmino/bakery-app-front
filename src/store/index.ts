import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slices/cart/index';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
