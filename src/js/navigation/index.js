import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.svg';
import * as Pages from '../pages/index';
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
            {Pages.allRoutes.map((route, index) => (
              !route.hideFromNav
              && <Nav.Link key={route.key} eventKey={index} as={Link} to={route.path} className="nav-item nav-link">{route.title}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
