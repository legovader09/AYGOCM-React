import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import '../../css/navbar.css';

const NavBar = () => (
  <nav className="navbar px-4 navbar-expand-lg fixed-top navbar-dark bg-dark">
    <span className="navbar-brand mb-0 h1">
      <img src={logo} width="30" height="30" alt="Logo" />
    </span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/" className="nav-item nav-link">Home</Link>
        <Link to="/cardmaker" className="nav-item nav-link">Card Maker</Link>
        <Link to="/about" className="nav-item nav-link">About</Link>
      </div>
    </div>
  </nav>
);

export default NavBar;
