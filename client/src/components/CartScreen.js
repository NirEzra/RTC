import React from 'react'
import '../style/CartScreen.css'
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap";
import { useParams,useHistory,useLocation , Link } from "react-router-dom";


export default function CartScreen() {
    const location = useLocation();
    
    return (
        <div className='cartScreen'>
            <Row>
                <Col md={8}>
                    <h1>Shopping Cart</h1>

                </Col>
                <Col md={2}>
                </Col>
                <Col md={2}>
                </Col>
            </Row>
        </div>
    )
}
