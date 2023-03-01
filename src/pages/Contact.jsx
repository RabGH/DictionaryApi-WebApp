import React from 'react';
import '../static/css/contact.css';
import MUITextField from '../components/TextField';
import MUIButton from '../components/MUIButton'


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
            <MUITextField id="name" label="Name" name="name" type="text" variant="outlined" required />
            </div>
            <div className="form-group">
              <MUITextField id="email" label="Email" name="email" type="email" variant="outlined" required />
            </div>
            <div className="form-group">
              <MUITextField id="subject" label="Subject" name="subject" type="text" variant="outlined" required />
            </div>
            <div className="form-group">
              <MUITextField id="message" label="Message" name="message" multiline rows={5} variant="outlined" required />
            </div>
            <div className="form-actions">
              <MUIButton type="submit" onClick={handleSubmit}>
                Send
              </MUIButton>
              <MUIButton type="reset">
                Clear
              </MUIButton>
            </div>
          </form>
        </div>
      </main>
      <footer className="footer">
        <p>
          Dictionary API &copy; 2023{' '}
          <MUIButton className="btn btn-contact" onClick={() => (window.location.href = '/')}>
            Home
          </MUIButton>
        </p>
      </footer>
    </>
  );
}

export default Contact;
