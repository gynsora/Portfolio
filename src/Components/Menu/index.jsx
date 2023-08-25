import { useState, useEffect  } from "react";
import logo from '../../Assets/img/logoGynsora.png';
import './Menu.scss'; 
import { HashLink  } from "react-router-hash-link";


function Menu(){
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
 
 
  return (
    <header>
        <nav className={scrolled === false ? '' : 'scrolled'}>
          <a href="#home"><img alt="logo" src={logo} /></a>
          <div id="navbar-container">
            <ul id="navbar" className={openMenu === false ? '' : 'open'}>
              <li><HashLink  to="/#home" className="navbar-link">HOME</HashLink></li>
              <li><HashLink  to="/#about" className="navbar-link">À PROPOS</HashLink></li>
              <li><HashLink  to="/#skills" className="navbar-link">COMPÉTENCES</HashLink></li>
              <li><HashLink  to="/#experiences" className="navbar-link">EXPÉRIENCES</HashLink></li>
              <li><HashLink  to="/#portfolio" className="navbar-link">PORTFOLIO</HashLink></li> </ul> 
          </div>
          <div id="mobile">
            <i id="bar" className={openMenu === false ? 'fas fa-bars' : 'fas fa-times'} onClick={() => setOpenMenu(!openMenu)}></i>
          </div>
        </nav>
    </header>


  )
}


  
export default Menu;


