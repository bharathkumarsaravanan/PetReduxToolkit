import {createSlice} from '@reduxjs/toolkit';

const productsInitialState = {
    products: [],
    loading: false,
    error: null,
    isEmpty: false,
};

export const productSlice = createSlice({
    name: 'products',
    initialState: productsInitialState,
    reducers: {
        fetchProductsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchProductsSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.isEmpty = false;
        },
        fetchProductsEmptyState: (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.isEmpty = true;
        },
        fetchProductsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isEmpty = false;
        },
    }
});

export const productActions = productSlice.actions;
export default productSlice.reducer;