export interface ProductsState {
    products: [];
}
export enum ProductsActionTypes {
     ADD_PRODUCT = 'ADD_PRODUCT',
     DELETE_PRODUCT = 'DELETE_PRODUCT',

}

export interface Products {
    cheese: number;
    sausage: number;
    cottageCheese: number;
    chicken: number;
    turkey: number;
    beef: number;
    pork: number;
    eggs: number;
    shampoo: number;
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