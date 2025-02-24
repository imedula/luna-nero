import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("home");


  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo'  />
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>მთავარი</Link>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>ჩვენს შესახებ</a>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>პროდუქტები</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-serach-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>შესვლა</button>
      </div>
    </div>
  )
}

export default Navbar
