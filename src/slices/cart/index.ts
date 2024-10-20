import Product from "@/models/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for each cart item
interface CartItem extends Partial<Product> {
    quantity: number;
    // Add other properties as necessary (e.g., description, etc.)
}

// Define the initial state type
interface CartState {
    cart: CartItem[];
    totalAmount: number;
}

const initialState: CartState = {
    cart: [],
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.cart.push(action.payload);
            }
            state.totalAmount += (action.payload?.price ?? 0) * action.payload.quantity;
        },
        removeFromCart(state, action: PayloadAction<number>) {
            const existingItem = state.cart.find(item => item.id === action.payload);
            if (existingItem) {
                state.totalAmount -= (existingItem.price ?? 0) * existingItem.quantity;
                state.cart = state.cart.filter(item => item.id !== action.payload);
            }
        },
        updateQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity = action.payload.quantity;
                state.totalAmount = state.cart.reduce(
                    (total, item) => total + (item.price ?? 0) * item.quantity,
                    0
                );
            }
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
