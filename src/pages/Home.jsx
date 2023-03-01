import React from 'react';
import '../static/css/styles.css';
import DictionaryApi from './DictionaryApi.jsx';
import MUIButton from '../components/MUIButton'


function Home() {
  return (
    <>
      <main>
        <div className="container">
          <h1>Dictionary API</h1>
          <p>This is an API that takes a word as a key and returns its definition as a value</p>
          <DictionaryApi className="total-output-pos" />
        </div>
      </main>
     <footer className="footer">
        <p>
          Dictionary API &copy; 2023{' '}
          <MUIButton className="btn-contact-pos" onClick={() => (window.location.href = '/contact')}>
            Contact
          </MUIButton>
        </p>
      </footer>
    </>
  );
}

export default Home;
