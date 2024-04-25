import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink exact to="/home">Home</NavLink></li>
        <li><NavLink to="/products">Product Page</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/Enquiry">Enquiry</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/signup">Signup</NavLink></li>
        
      </ul>
    </nav>
  );
}

export default NavBar;
