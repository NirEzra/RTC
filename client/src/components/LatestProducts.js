import React, { useState, useEffect } from 'react'
import '../style/ListProducts.css'
import MyProducts from '../MyProducts'
import { Row, Col } from 'react-bootstrap'
import Product from './Product'
import { useSelector, useDispatch } from 'react-redux'

import { product_list_request } from '../features/productList/productListSlice';
import {got_error} from '../features/error/Error'

export default function ListProducts() {
    const products = useSelector((state) => state.productList.products)
    const error = useSelector((state) => state.error.error)
    const loading = useSelector((state) => state.loading.loading)
    const dispatch = useDispatch()
  
    useEffect(() => {
        try {
            
            dispatch(product_list_request())
        } catch (error) {
            dispatch(got_error(
                error.response && error.response.data.message 
                ?error.response.data.message 
                : error.message
                ))
        }
        console.log(products);
       
    }, [products])

    return (
        <div style={{ width: '90%', margin: 'auto' }}>
            <h1>Latest Product</h1>
            {loading ?
                <h2>Loading..</h2>
                : error ?
                    <h3>{error}</h3> :
                    <Row >
                        {products.map((product) => (
                            <Col style={{alignItems:'center',justifyContent:'center', margin:'auto',display:'flex'}}  key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}

                    </Row>
            }



        </div>
    )
}
