import React from 'react';
import '../static/css/styles.css';
import '../static/css/contact.css';

function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {};
    for (let entry of formData.entries()) {
      data[entry[0]] = entry[1];
    }
    console.log(data);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
      console.log('Email sent successfully');
      alert('Email sent successfully');
    } catch (error) {
      console.error('Error sending email', error);
      alert('Error sending email');
    }
  };

  return (
    <>
      <main>
        <div className="container">
          <h1>Contact Me</h1>
          <p>
            Contact Page, type in your name, email, subject, and message
          </p>
          <form className="form-contact" onSubmit={handleSubmit}>
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
          <button className="btn btn-contact" onClick={() => (window.location.href = '/')}>
            Home
          </button>
        </p>
      </footer>
    </>
  );
}

export default Contact;
