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
              <a href="https://www.facebook.com/profile.php?id=61566798553010&rdid=bRDD01HycZPBais1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18W2VyZ4TK%2F" target='_blank'>
                <img src={assets.facebook_logo} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/lunanerocentr/?fbclid=IwZXh0bgNhZW0CMTEAAR0s5vf_eV67H6szOekULPDcRwnQxBKh3_hT_Cpji3snmb233Ig__DPbiSQ_aem_JKpKjFVOk0x-7bJOrZixsg" target='_blank'>
                <img src={assets.instagram_logo} alt="instargamm" />
                </a>
                <a href="https://www.tiktok.com/@luna.nero5?_t=ZS-8u9rJW0Sb8k&_r=1" target='_blank'>
                <img src={assets.tiktok_logo} alt="" />
                </a>
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
      {/* <button className="contact-button" onClick={() => setShowContact(true)}>
        Open Contact Form
      </button>
      {showContact && <ContactForm setShowContact={setShowContact} />} */}
      <hr/>
      <p className="footer-copyright">© 2025 ყველა უფლება დაცულია</p>
    </div>
  )
}

export default Footer
