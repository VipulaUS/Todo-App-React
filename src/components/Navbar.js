import React from 'react';
import logo from "./logo.png";
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav'>
          <img src={logo} className="site-logo" alt="logo" />
    </div>
  )
}

export default Navbar