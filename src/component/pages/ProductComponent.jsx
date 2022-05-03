import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function ProductComponent() {
    const products = useSelector(state => state.productReducer.products)

    return (
        <div className='row'>
            {
                products.map((product) => {
                    const { id, image, price, title, category } = product
                    return (
                        <div className='cards col-0- 12 col-sm-6 col-md-4 col-xl-3 mb-4' key={id}>
                            <Link to={`/product/${id}`} style={{ color: 'black' }}>
                                <div className="card">
                                    <div className='image'>
                                        <img src={image} className="card-img-top" alt="Not found" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text">{price}</p>
                                        <p className="card-text">{category}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )

                })
            }
        </div>
    )
}
