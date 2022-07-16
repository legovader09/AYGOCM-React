import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.svg';
import '../../css/navbar.css';

const NavBar = () => {
  const [navColour, setNavState] = useState('light');
  window.addEventListener('scroll', () => setNavState(window.scrollY > 56 ? 'dark' : 'light'));
  return (
    <Navbar collapseOnSelect expand="lg" bg={navColour} variant={navColour} fixed="top">
      <Container>
        <Link to="/">
          <img className="navbar-logo" src={logo} alt="Logo" />
        </Link>
        <Navbar.Toggle aria-controls="navbar-toggler" id="hamburger" />
        <Navbar.Collapse id="navbar-toggler">
          <Nav className="mx-auto">
            <Nav.Link eventKey="1" as={Link} to="/" className="nav-item nav-link">Home</Nav.Link>
            <Nav.Link eventKey="2" as={Link} to="/cardmaker" className="nav-item nav-link">Card Maker</Nav.Link>
            <Nav.Link eventKey="3" as={Link} to="/about" className="nav-item nav-link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
