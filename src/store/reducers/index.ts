import {combineReducers} from "redux";
import {productReducer} from "./productReducer.ts";


export const rootReducer = combineReducers({
    products: productReducer,
})

export type RootState = ReturnType<typeof rootReducer>
