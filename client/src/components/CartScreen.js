import React, { useEffect, useState } from 'react'
import '../style/CartScreen.css'
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap";
import { useParams, useHistory, useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { get_from_local, add_item_onChange } from '../features/cartItems/CartItems'
import Message from './Message';



export default function CartScreen() {
    const location = useLocation();
    let { id } = useParams();
    const history = useHistory()
    const dispatch = useDispatch()

    const error = useSelector((state) => state.error.error)
    const loading = useSelector((state) => state.loading.loading)
    const products = useSelector((state) => state.productList.products)
    const cartItems = useSelector((state) => state.cartItems.cartItems)

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    useEffect(() => {
        dispatch(get_from_local())

        // if (id) {
        //     const correntItem = products.find(x => x._id === id)
        //     // console.log(correntItem);
        //     // dispatch(fetchItemById(correntItem))
        //     // dispatch(cart_add_item(correntItem))
        // }

    }, [dispatch])


    const checkoutHandler = () => {

    }

    return (
        <div style={{ marginTop: '10vh' }} className='cartScreen'>
            <Row>
                <Col md={8}>
                    <h1>Shopping Cart</h1>
                    {cartItems.length === 0
                        ? <Message>Your cart is empty<Link to='/'>Go back</Link></Message>
                        : (

                            <ListGroup variant='flush'>
                                {React.Children.toArray(cartItems.map(item => (
                                    <ListGroup.Item key={item.product}>
                                        <Row>
                                            <Col md={2}>
                                                <Image src={item.image} alt={item.name} fluid rounded />
                                            </Col>
                                            <Col md={3}>
                                                <Link to={`/product/${item._id}`}>{item.name}</Link>
                                            </Col>
                                            <Col md={2}>
                                                ${item.price}
                                            </Col>
                                            <Col md={2}>
                                                <Form.Control as='select' value={item.qty} onChange={(e) =>
                                                    dispatch(add_item_onChange({ item: item, qty: item.qty, target: Number(e.target.value) }))


                                                }>
                                                    {
                                                        [...Array(item.countInStock).keys()].map(x => (
                                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                        ))
                                                    }
                                                </Form.Control>
                                            </Col>
                                            <Col md={2}>
                                                <Button type='button' variant='light' >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                    </svg>
                                                </Button>
                                            </Col>
                                        </Row>

                                    </ListGroup.Item>
                                )))}

                            </ListGroup>

                        )
                    }
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                                ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}

                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button type='button' className='btn-block' disabled={cartItems.length === 0} onClick={checkoutHandler}>
                                    Proceed To Checkout

                                </Button>

                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
