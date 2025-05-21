import React from 'react'
import emailjs from 'emailjs-com';

function ContactMe() {

  const SERVICE_ID = "service_hhvo8uo";
  const TEMPLATE_ID = "template_1nm87bo";
  const PUBLIC_KEY = "DhAmDbrk4_mh6nSgl"

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert('Message Sent Successfully')
      }, (error) => {
        console.log(error.text);
        alert('Something went wrong!')
      });
    e.target.reset()
  };

  return (
    <div className='contactMe border pb-5' id="contactme">
      <form className="formContainer border" onSubmit={handleOnSubmit}>
        <h2>Contact Me</h2>
        <div className="formElement">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.." required />
        </div>

        <div className="formElement">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Your email.." required />
        </div>

        <div className="formElement">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="8" cols="30" placeholder="Your message.." required />
        </div>

        <button type='submit' className='formButton'>Submit</button>
      </form>
    </div>
  )
}

export default ContactMe
