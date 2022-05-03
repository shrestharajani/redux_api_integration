import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts, removeSelectedProduct } from '../../redux/actions/productAction';

export default function ProductDetails() {
    const product = useSelector(state => state.selectedProductReducer)
    const { image, title, price, category, description } = product

    const dispatch = useDispatch()
    const { product_id } = useParams();

    const fetchSingleProduct = async () => {
        const singleProduct = await axios.get(`https://fakestoreapi.com/products/${product_id}`).catch(error => {
            console.log(error)
        })
        dispatch(selectProducts(singleProduct.data))
    }

    useEffect(() => {
        if (product_id && product_id !== '') {
            fetchSingleProduct();
        }
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [product_id]);

    return (
        <div className='container'>
            {
                Object.keys(product).length === 0 ?
                    <div className='d-flex align-items-center justify-content-center' style={{ minHeight: "90vh" }}>
                        <h1>Loading......</h1>
                    </div> : <div className="row">
                        <div className='card card-image col-6 single-image'>
                            <img src={image} className="card-img-top" alt="Not found" />
                        </div>
                        <div className="card card-detail col-6">
                            <div className='card-body'>
                                <h3 className="card-title my-4">{title}</h3>
                                <div className="pricetag mb-4">{price}</div>
                                <p className="category mb-3">{category}</p>
                                <h5 className="description mb-4">{description}</h5>
                                <button className='btn btn-success'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
            }
        </div >
    )
}
