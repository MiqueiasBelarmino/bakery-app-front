import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slices/cart/index';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// Step 1: Define your persist config
const persistConfig = {
  key: 'root', // Key to store data in localStorage
  storage, // Use localStorage to store state
  whitelist: ['cart'], // Only persist the cart slice
};

// Step 2: Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, cartReducer);

// Step 3: Configure the store with middleware to ignore redux-persist actions
export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types from redux-persist
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Step 4: Create a persistor for the store
export const persistor = persistStore(store);

export default store;
