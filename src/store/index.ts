import {createStore} from "redux";
import {productReducer} from "./reducers/productReducer.ts";



export const store = createStore(productReducer)
