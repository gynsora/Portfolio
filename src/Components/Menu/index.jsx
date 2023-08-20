import { useState } from "react";
import logo from '../../Assets/img/logoGynsora.png';
import './Menu.scss' 

function Menu(){

  const [activeLink, setActiveLink] = useState('home');
  const [openMenu,setOpenMenu] = useState(false);
  
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
   <header>
    <nav >
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
