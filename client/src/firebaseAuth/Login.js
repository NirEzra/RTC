import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../components/contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import { Container } from "react-bootstrap";

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const history = useHistory()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")

        } catch (err) {
            setError('failed to Login')
            console.log(err)
        } finally {
            setLoading(false)
        }

    }
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
            //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: () => false,
        },
    };

    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Card >
                    <Card.Body >
                        <h2 className="text-center mb-4"> Login</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required></Form.Control>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required></Form.Control>
                            </Form.Group>

                            <Button disabled={loading} className="w-100 mt-2" type="submit">Login</Button>
                            <div className="w-100 text-center mt-3">
                                <Link to="/forgot-password">Forgot Password?</Link>
                            </div>
                        </Form>
                        <div className="w-100 text-center mt-2">
                            new on this site? <Link to="/signUp">Sign Up</Link>
                        </div>
                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                    </Card.Body>
                </Card>

            </div>
        </Container>

    )
}
