import React from "react";
import { useState } from "react";
import "./navbar.css";
import logo from '../assets/logo.png';
import {Link} from "react-scroll";
import contact from '../assets/contact.png'
import menubar from '../assets/menu.png'


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="navbar">
     <Link  smooth={true} spy={true} offset={-60} duration={800} to="hero"> 
       <img src ={logo} alt="logo" className="logo"></img>
       </Link>
    <div className="desktopmenu">
      <div className="nav-items">
        <Link activeClass="active-menu" smooth={true} spy={true}  offset={-60} duration={800} to="hero" className="nav-item"> Home </Link>
        <Link activeClass="active-menu" smooth={true} spy={true} duration={800}  offset={-60} to="about" className="nav-item"> About </Link>
        <Link activeClass="active-menu" smooth={true} spy={true} duration={800} offset={-60} to="portfolio" className="nav-item"> Protfolio </Link>
      </div>
      <button className="contact-btn" 
    onClick={() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const offset = -50; // Adjust this as needed
            const top = contactSection.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    }}>
    <img src={contact} alt="Contact" className="contact-icone" /> Contact Me
</button>
</div>
    

<div className="mobmenu-container">
       <img src ={menubar} alt="menu-img" onClick={()=>setMenu(!menu)} className="menu-bar"></img>
      <div className="mov-nav-menu" style={{display: menu?'flex':'none'}}>
        <Link smooth={true} spy={true} onClick={()=>setMenu(false)}  offset={-60} duration={800} to="hero" className="mob-menu-item"> Home </Link>
        <Link smooth={true} spy={true} onClick={()=>setMenu(false)} duration={800}  offset={-60} to="about" className="mob-menu-item"> About </Link>
        <Link smooth={true} spy={true} onClick={()=>setMenu(false)} duration={800} offset={-60} to="portfolio" className="mob-menu-item"> Protfolio </Link>
        <Link smooth={true} spy={true} onClick={()=>setMenu(false)} duration={800} offset={-60} to="contact" className="mob-menu-item"> Contact </Link>
      </div>
</div>
</nav>

  );
};
``
export default Navbar;
