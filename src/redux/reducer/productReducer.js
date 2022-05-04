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

        case ActionTypes.FETCH_PRODUCTS:
            return {
                ...state,
                products:action.payload
            }

        default:
            return state
    }
}

export const selectedProductReducer = (state = {},action)=>{
    switch (action.type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {
                ...state,
                ...action.payload
            }

        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}

        default:
            return state
    }
}