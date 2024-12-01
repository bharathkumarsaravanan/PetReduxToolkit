import axios from "axios";

export const fetchProducts = ({actions, dispatch}) => {
    dispatch(actions.fetchProductsStart());
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
        let data = {
            success: true,
            products: response.data,
        }  
        if (data.success) {
            if (data.products.length === 0) {
                dispatch(actions.fetchProductsEmptyState(data.products));
            } else {    
                dispatch(actions.fetchProductsSuccess(data.products));
            }
        } else {
            dispatch(actions.fetchProductsFailure(error.message))
        }        
    })
    .catch(error => {
        dispatch(actions.fetchProductsFailure(error.message));
    });
}