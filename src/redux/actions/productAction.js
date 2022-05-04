import fakeapi from '../../apis/baseUrl'
import { ActionTypes } from "../constant/actionType"

export const fetchProducts = () => async (dispatch)=>{
        const response = await fakeapi.get('/products')
        
        dispatch({
            type :ActionTypes.FETCH_PRODUCTS,
            payload : response.data
        })
}

export const fetchSingleProduct = (id) => async (dispatch)=>{
    const response = await fakeapi.get(`/products/${id}`)
    
    dispatch({
        type :ActionTypes.SELECTED_PRODUCT,
        payload : response.data
    })
}

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

export const removeSelectedProduct = () =>{
    return{
        type :ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}