import { useRef } from "react";
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    emailjs.sendForm('service_ptzclcr', 'template_7y7ftfd', form.current, 'user_JuA2JWnC5u4koiSoQ48Rb')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
    
    e.target.reset()
  }

  return (
    <section className="contact" id='contact'>
      <h1>Let's chat!</h1>
      <p>Send me an email and I'll get back to you shortly.</p>
      <div className='form-container'>
        <form ref={form} onSubmit={handleSubmit} name="contact">
          <div >
            <label htmlFor="name">
              Name
            </label>
            <textarea 
              className="input"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div >
            <label htmlFor="email">
              Email
            </label>
            <textarea 
              className="input"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div>
            <label htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
            />
          </div>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact