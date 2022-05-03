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

        case ActionTypes.SELECTED_PRODUCT:
            const {product} = action.payload;
            return {
                ...state,
                products:product
            }

        default:
            return state
    }
}

export const selectedProductReducer = (state = {},action)=>{
    switch (action.type) {
        case ActionTypes.SELECTED_PRODUCT:
            const {product} = action.payload;
            return {
                ...state,
                ...product
            }

        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}

        default:
            return state
    }
}