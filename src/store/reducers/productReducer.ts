import {ProductAction, ProductsActionTypes} from "../../types/products.ts";

const initialState = {
    products: []
}

export const productReducer = (state = initialState, action: ProductAction) => {
    switch (action.type) {
        case ProductsActionTypes.ADD_PRODUCT:
            return {...state, products: [...state.products, action.payload]};
        case ProductsActionTypes.DELETE_PRODUCT:
            return {...state, products: state.products.filter(product => product.id !== action.payload)};
        default:
            return state
    }
}
