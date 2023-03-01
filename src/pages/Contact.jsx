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
        <div className="container-contact">
          <h1>Contact Me</h1>
          <p>
            Contact Page, type in your name, email, subject, and message
          </p>
        </div>
        <div className="container-contact-form">
          <form className="form-contact" onSubmit={handleSubmit}>
            <div className="form-group">
              <MUITextField className="name-contact-field-pos" id="name" label="Name" name="name" type="text" variant="outlined" required />
            </div>
            <div className="form-group">
              <MUITextField className="email-contact-field-pos" id="email" label="Email" name="email" type="email" variant="outlined" required />
            </div>
            <div className="form-group">
              <MUITextField className="subject-contact-field-pos" id="subject" label="Subject" name="subject" type="text" variant="outlined" required />
            </div>
            <div className="form-group">
              <MUITextField className="message-contact-field-pos" id="message" label="Message" name="message" multiline rows={5} variant="outlined" required />
            </div>
            <div className="form-actions">
              <MUIButton className="send-btn" spacing={2} type="submit" onClick={handleSubmit} style={{ marginRight: '10px' }}>
                Send
              </MUIButton>
              <MUIButton className="clear-btn" spacing={2} type="reset" style={{ marginLeft: '10px' }}>
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
