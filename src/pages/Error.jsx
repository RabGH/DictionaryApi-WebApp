import React from 'react';
import '../static/css/styles.css';
import '../static/css/error.css';

function Error() {
  return (
  <>
      <main>
        <div className="error-container">
          <h1 className="error-message">Error</h1>
          <p className="error-description">The word you are looking for doesn't exist! Or if it's another error, please contact us.</p>
          <div className="error-btn-container">
            <button className="error-btn" onClick={() => {window.location.href='/'}}>Home</button>
            <button className="error-btn" onClick={() => {window.location.href='/contact/'}}>Contact</button>
          </div>
        </div>
      </main>
  </>
  );
}

export default Error;
