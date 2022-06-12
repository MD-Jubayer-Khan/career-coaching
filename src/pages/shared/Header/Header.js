import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    // const [user] = useAuthState(auth);

    // const handleSignOut = () =>{
    //     signOut(auth);
    return (
         <div>

            <Navbar collapseOnSelect expand="lg" sticky='top' bg="info" variant="light" style={{height:'100px'}}>
                <Container>
                    <Navbar.Brand as={Link} to="/" className='text-white'>
                        Career Coach
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="checkout">Checkout</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            
                        </Nav>
                        {/* <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
         </div>
    );
};

export default Header;