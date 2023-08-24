import { useState, useEffect  } from "react";
import logo from '../../Assets/img/logoGynsora.png';
import './Menu.scss'; 
////gheg
// import { useState, useEffect } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
//import { HashLink } from 'react-router-hash-link';
// import {
//   BrowserRouter as Router
// } from "react-router-dom";

function Menu(){
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [openMenu,setOpenMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
   <header>
      <nav className={scrolled === false ? '' : 'scrolled'}>
        <a href="#home"><img alt="logo" src={logo} /></a>
        <div id="navbar-container">
          <ul id="navbar" className={openMenu === false ? '' : 'active'}>
            <li><a href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>HOME</a></li>
            <li><a href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>À PROPOS</a></li>
            <li><a href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>COMPÉTENCES</a></li>
            <li><a href="#experiences" className={activeLink === 'experiences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experiences')}>EXPÉRIENCES</a></li>
            <li><a href="#portfolio"  className={activeLink === 'portfolio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('portfolio')}>PORTFOLIO</a></li>
        </ul> 
        </div>
        <div id="mobile">
          <i id="bar" className={openMenu === false ? 'fas fa-bars' : 'fas fa-times'} onClick={() => setOpenMenu(!openMenu)}></i>
        </div>
      </nav>
   </header>


  )
}


  
export default Menu;
