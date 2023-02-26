import React from 'react';
import './static/css/styles.css';
import Header from '/components/Header.jsx'

function Contact() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>Contact Me</h1>
          <p>
            Contact Page, type in your name, email, subject, and message
          </p>
          <form className="form-contact" action="/api/contact" method="post">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input className="text-contact" type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input className="text-contact" type="text" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input className="text-contact" type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <div className="form-actions">
              <input className="input-contact" type="submit" value="Send" />
              <input className="input-contact" type="reset" value="Clear" />
            </div>
          </form>
        </div>
      </main>
      <footer className="footer">
        <p>
          Dictionary API &copy; 2023{' '}
          <button className="btn btn-contact" onClick={() => window.location.href = '/'}>Home</button>
        </p>
      </footer>
    </>
  );
}

export default Contact;
