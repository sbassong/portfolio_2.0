import React from 'react';
import { useRef } from "react";
import emailjs from 'emailjs-com';

const Contact = ({closeOverlay}) => {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ptzclcr', 'template_7y7ftfd', form.current, 'user_JuA2JWnC5u4koiSoQ48Rb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
    e.target.reset();
  };

  return (

      <section className="contact  emailOverlayWrapper" id='contact' onKeyDown={(e) => e.key === "Escape" && closeOverlay}>
        <div className="backdrop"></div>
        <div className='form-container emailOverlayContent'>
          <img src="https://i.imgur.com/cdUyJgN.png" alt="close-x" role="button" onClick={closeOverlay} className="overlay-close" />
          <h1>Let's chat!</h1>
          <p>Send me an email and I'll get back to you promptly</p>
          <form ref={form} onSubmit={handleSubmit} name="contact">
            <textarea 
              className="input"
              type="text"
              id="name"
              name="name"
              placeholder='NAME'
            />
            <textarea 
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder='EMAIL'
            />
            <textarea
              id="message"
              name="message"
              placeholder="MESSAGE"
            />
            <button type="submit" id='sendEmailButton'>
              Submit
            </button>
          </form>
        </div>
      </section>
    // </Overlay>
  );
}

export default Contact;