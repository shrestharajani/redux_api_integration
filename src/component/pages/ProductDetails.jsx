import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedProduct, fetchSingleProduct } from '../../redux/actions/productAction';

export default function ProductDetails() {
    const product = useSelector(state => state.selectedProductReducer)
    const { image, title, price, category, description } = product

    const dispatch = useDispatch()
    const { product_id } = useParams();

    useEffect(() => {
        if (product_id && product_id !== '') {
            dispatch(fetchSingleProduct(product_id));
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
                        <div className="spinner-border" style={{ width: "5rem", height: "5rem" }} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
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
