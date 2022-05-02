import { ActionTypes } from "../constant/actionType"

export const allProducts = (products) =>{
    return{
        type :ActionTypes.ALL_PRODUCT,
        payload : {products},
    }
}

export const selectProducts = (product) =>{
    return{
        type :ActionTypes.SELECTED_PRODUCT,
        payload : {product}
    }
}

// export const removeSelectedProduct = (product) =>{
//     return{
//         type :ActionTypes.REMOVE_SELECTED_PRODUCT,
//         payload : {product}
//     }
// }