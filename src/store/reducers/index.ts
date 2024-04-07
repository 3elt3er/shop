import {combineReducers} from "redux";
import {productReducer} from "./productReducer.ts";


export const rootReducer = combineReducers({
    user: productReducer,
})

export type RootState = ReturnType<typeof rootReducer>
