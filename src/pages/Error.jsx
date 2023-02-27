import React from 'react';
import '../static/css/styles.css';
import Header from '../components/Header'

function Error() {
  return (
  <>
    <Header />
      <main>
        <div className="error">
          <h1>Error</h1>
          <p>The word you are looking for doesn't exist! Or if it's another error, please contact us.</p>
          <div className="error-buttons">
            <button className="btn" onClick={() => {window.location.href='/'}}>Home</button>
            <button className="btn" onClick={() => {window.location.href='/contact/'}}>Contact</button>
          </div>
        </div>
      </main>
  </>
  );
}

export default Error;
