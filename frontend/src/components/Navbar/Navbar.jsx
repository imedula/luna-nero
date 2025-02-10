import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

  const [menu,setMenu] = useState("home");


  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo'  />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>მთავარი</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>პროდუქტი</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>აპლიკაცია</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>ჩვენს შესახებ</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-serach-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>შესვლა</button>
      </div>
    </div>
  )
}

export default Navbar
