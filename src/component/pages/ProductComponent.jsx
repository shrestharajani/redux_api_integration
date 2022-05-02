import React from 'react'
import { useSelector } from 'react-redux'

export default function ProductComponent() {
    const products = useSelector(state => state.productReducer.products)

    return (
        <>
            {
                products.map((product, index) => {
                    const { image, price, title, category } = product
                    return (
                        <div className='four column wide'>
                            <div className='ui link cards' key={index}>
                                <div className='card'>
                                    <div className='image'>
                                        <img src={image} alt="Not found" />
                                    </div>
                                    <div className='content'>
                                        <div className='header'>
                                            <div className='header'>{title}</div>
                                            <div className='meta price'>{price}</div>
                                            <div className='meta'>{category}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                })
            }
        </>
    )
}
