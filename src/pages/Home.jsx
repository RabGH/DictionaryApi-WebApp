import React from 'react';
import '../static/css/styles.css';
import DictionaryApi from './DictionaryApi.jsx';


function Home() {
  return (
    <>
      <main>
        <div className="container">
          <h1>Dictionary API</h1>
          <p>This is an API that takes a word as a key and returns its definition as a value</p>
          <DictionaryApi />
        </div>
      </main>
     <footer className="footer">
        <p>
          Dictionary API &copy; 2023{' '}
          <button className="btn btn-contact" onClick={() => (window.location.href = '/contact/')}>
            Contact
          </button>
        </p>
      </footer>
    </>
  );
}

export default Home;
