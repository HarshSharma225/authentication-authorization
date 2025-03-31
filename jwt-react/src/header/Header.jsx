import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./Header.css";
function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className='header'>
          <div>
            <Navbar.Brand>Not-LoggedIn</Navbar.Brand>
          </div>
          <div>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/login" className='nav-link'>Login</Nav.Link>
              <Nav.Link as={Link} to="/signup" className='nav-link'>SignUp</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header