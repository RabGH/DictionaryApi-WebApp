import React from 'react';
import '.static/css/styles.css'; // import the styles.css file


function Header() {
  return (
      <header className="header">
        <div className="logo-container">
          <img className="logo" src="/static/images/logo.png" alt="" />
        </div>
      </header>
    )
}

export default Header;
