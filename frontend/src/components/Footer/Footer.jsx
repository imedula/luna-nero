import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod blanditiis voluptatem ab officia numquam itaque vel odio, quas eligendi rerum possimus iste, impedit aliquam. Fugit dolor maiores sint ea quis?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Luna Nero</h2>
            <ul>
                <li>მთავარი</li>
                <li>ჩვენს შესახებ</li>
                <li>მომსახურება</li>
                <li>კონფიდენციალობის პოლიტიკა</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+995 577 888 999</li>
                <li>contact@luna.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">© 2025 ყველა უფლება დაცულია</p>
    </div>
  )
}

export default Footer
