// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/products/productSlice';

export const store = configureStore({
  reducer: {
    productSlice: productSlice,
  },
});