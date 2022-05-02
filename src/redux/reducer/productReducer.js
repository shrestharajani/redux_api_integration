import { ActionTypes } from "../constant/actionType";

const initialState = {
    products :[]
}

export const productReducer = (state = initialState,action)=>{
    switch (action.type) {
        case ActionTypes.ALL_PRODUCT:
            const {products} = action.payload;
            return {
                ...state,
                products
            }

        default:
            return state
    }
}