import React, { useState } from 'react'
import './ContactForm.css'
import { assets } from '../../assets/assets'
import Swal from 'sweetalert2'

const ContactForm = ({ setShowContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    onSubmit(e);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6eda086b-5efe-4985-88e9-f8a5c64eae6c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "შეტყობინება გაიგზავნა!",
        icon: "success"
      });
    }
  };

  return (
    <div className='contact-form-overlay'>
      <div className='contact-form-container'>
        <div className="contact-form-title">
          <h2>Contact Us</h2>
          <img onClick={() => setShowContact(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="სახელი"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="მეილი"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="თქვენი შეტყობინება"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-form-button">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
