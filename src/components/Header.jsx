import React from 'react';
import '../static/css/styles.css';
import logo from '../static/images/logo.png'; // import the image

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="" /> {/* use the imported image */}
      </div>
    </header>
  )
}

export default Header;
