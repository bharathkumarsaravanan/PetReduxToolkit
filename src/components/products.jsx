import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "../actions/actions";
import { productActions } from "../features/products/productSlice";

export const Products = () => {
    const dispatch = useDispatch();
    const {products, loading, error, isEmpty} = useSelector(state => state.productSlice);

    useEffect(() => {
        fetchProducts({
            actions: productActions,
            dispatch
        });
    }, []);

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {isEmpty && <h1>No products found</h1>}
            {products.map(product => (
                <div key={product.id}>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    )
}
