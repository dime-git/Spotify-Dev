import React from 'react';
import { Container } from 'react-bootstrap';


function Navbar() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="/">Your Spotify </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="/">Dimitar Milkov</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbar;
