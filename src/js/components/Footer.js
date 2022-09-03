import React from 'react';
import Logo from '../../assets/logo.svg';

const Footer = () => (
  <div className="footer">
    <img className="footer-logo" src={Logo} alt="Logo" />
    <p className="footer-text">Copyright © 2022 Dominik Hauerstein</p>
  </div>
);

export default Footer;
