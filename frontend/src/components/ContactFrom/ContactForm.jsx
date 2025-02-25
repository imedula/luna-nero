import React, { useState } from 'react'
import './ContactForm.css'
import { assets } from '../../assets/assets'

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
    console.log(formData)
    // Add form submission logic here
  }

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
