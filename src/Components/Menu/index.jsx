import { useState, useEffect, useContext } from "react";
import { ThemeContext } from '../../Utils/Context';
//import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../Assets/img/logoGynsora.png';
//import { BrowserRouter as Router } from "react-router-dom";
import './Menu.scss' 

function Menu(){

  const [activeLink, setActiveLink] = useState('home');
  const { theme } = useContext(ThemeContext)
  const [openMenu,setOpenMenu] = useState(false);
  /*
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
  */
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
   <header>
    <nav className={theme === 'light' ? '': 'dark'}>
      <a href="#home"><img alt="logo" src={logo} /></a>
      <div id="navbar-container">
        <ul id="navbar" className={openMenu === false ? '' : 'active'}>
          <li><a href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>HOME</a></li>
          <li><a href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>A PROPOS</a></li>
          <li><a href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>COMPETENCES</a></li>
          <li><a href="#experiences" className={activeLink === 'experiences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experiences')}>EXPERIENCES</a></li>
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
