export enum ProductsActionTypes {
     ADD_PRODUCT = 'ADD_PRODUCT',
     DELETE_PRODUCT = 'DELETE_PRODUCT',

}

export interface Product {
    name: string;
    price: number;
}

export interface Products {
    [key: string]: Product;
}

interface AddProductAction {
    type: ProductsActionTypes.ADD_PRODUCT;
    payload: [];
}

interface DeleteProductAction {
    type: ProductsActionTypes.DELETE_PRODUCT;
    payload: [];
}

export type ProductAction = AddProductAction | DeleteProductAction;