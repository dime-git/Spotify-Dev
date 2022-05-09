import React from 'react';
import { Container } from 'react-bootstrap';

function Login() {
    return (
        <Container className="d-flex justify-content-center align-items-center" href='/login'
            style={{ minHeight: "100vh" }}>
            <a className="btn btn-success btn-lg">
                Log in to Spotify
            </a>
        </Container>
    )
}

export default Login;