import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import { allProducts } from '../../redux/actions/productAction'

export default function ProductListing() {
    const [product, showProduct] = useState(false)
    const products = useSelector(state => state)

    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch(error => {
            console.log({ error })
        })
        showProduct(true)
        dispatch(allProducts((response.data)))
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    if (!product) {
        return (
            <div className='d-flex align-items-center justify-content-center' style={{ minHeight: "90vh" }}>
                <h1>Loading......</h1>
            </div>
        )
    }
    return (
        <div className='container'>
            <ProductComponent />
        </div>
    )
}
