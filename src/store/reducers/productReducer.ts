import {ProductAction, ProductsActionTypes} from "../../types/products.ts";

const initialState = {
    products: []
}

export const productReducer = (state = initialState, action: ProductAction) => {
    switch (action.type) {
        case ProductsActionTypes.ADD_PRODUCT:
            return {...state, products: [...state.products, action.payload]};
        default:
            return state
    }
}
