import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent'
import { fetchProducts } from '../../redux/actions/productAction'

export default function ProductListing() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);

    return (
        <div className='container'>
            <ProductComponent />
        </div>
    )
}
