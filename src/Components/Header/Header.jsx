import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <Navbar collapseOnSelect bg="primary" expand="lg" variant='dark'>
          <Container>
              <Navbar.Brand href="#">E-commerceHub</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                  <Nav
                      className="me-auto my-2 my-lg-0"
                      navbarScroll
                     >
                      <Nav>
                          <Link to="/" className='nav-link'>Home</Link>
                      </Nav>
                      <Nav>
                          <Link to="/about" className='nav-link'>About</Link>
                      </Nav>
                  </Nav>
                  <Nav
                      className=" my-2 my-lg-0"
                      navbarScroll
                     >
                      <Nav>
                          <Link to="/cart" className='nav-link'>Cart</Link>
                      </Nav>
                      <Nav>
                          <Link to="/login" className='nav-link'>Login</Link>
                      </Nav>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  )
}

export default Header