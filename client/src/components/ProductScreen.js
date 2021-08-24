import React, { useState } from 'react'
import products from "../MyProducts";
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap";
import { useParams,useHistory, Link } from "react-router-dom";
import '../style/ProductScreen.css'

const ProductScreen = () => {
    let { id } = useParams();
    const product = products.find(p => p._id === id) || 1;
    const [qty, setQty] = useState(1)
    const history = useHistory()

    const addToCartHandler = () => {
        history.push(`/cart/${id}?qty=${qty}`)
    }

    return (
        <div style={{ marginTop: "10vh", width: '90%', margin: "10vh auto" }}>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid></Image>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Dscription: ${product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup>
                            <ListGroup.Item variant='flush'>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>{product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item variant='flush'>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        <strong>{product.countInStock > 0 ? 'In tock' : 'Out Of Stock'}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            {product.countInStock > 0 && (
                                <ListGroup.Item >
                                    <Row>
                                        <Col>
                                            Qty:
                                        </Col>
                                        <Col>
                                            <Form.Control as='select' value={qty} onChange={(e) =>
                                                setQty(e.target.value)
                                            }>
                                                {
                                                    [...Array(product.countInStock).keys()].map(x => (
                                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                    ))
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}


                            <ListGroup.Item variant='flush'>
                                <Button
                                onClick={addToCartHandler}
                                    className='btn-block'
                                    type='button'
                                    disabled={product.countInStock === 0}>
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}


export default ProductScreen