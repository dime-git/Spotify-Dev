import React from 'react';
import { Container } from 'react-bootstrap';
import LoginButton from '../Components/Buttons/LoginButton';

function Login() {
    return (
        <Container className="d-flex justify-content-center align-items-center" href='/login'
            style={{ minHeight: "100vh" }}>
                <LoginButton/>
        </Container>
    )
}

export default Login;