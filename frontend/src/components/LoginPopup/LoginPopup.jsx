import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login")

  return (
    <div className='login-popup-overlay'>
      <div className='login-popup'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign up" && <input type="text" placeholder='სახელი' required />}
          <input type="email" placeholder='მეილი' required />
          <input type="password" placeholder='პაროლი' required />
        </div>
        <button className="login-popup-button">
          {currState === "Sign up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>ვეთანხმები გამოყენების პირობებს</p>
        </div>
        {currState === "Login" ?
          <p>Create a new account? <span onClick={() => setCurrState("Sign up")}>Click here</span></p> :
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        }
      </div>
    </div>
  )
}

export default LoginPopup
