import React from 'react';

function Navbar() {
  return (
    <header className="header">
      <a href="/" className="logo">logo</a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
      <ul className="menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>
    </header>
  );
}

export default Navbar;
