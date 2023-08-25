import './Banner.scss';
import { HashLink  } from "react-router-hash-link";

function Banner() {
    return (
      <section id="home">
        <div id="banner" className="banner-landing-text">
          <h1>Nadjim Djamani</h1>
          <h6>Développeur Web fullstack</h6>
          <a href="/CV développeur informatique.pdf" target="_blank" rel="noopener noreferrer"> 
            <div className="banner-download-cv">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Télécharger CV
            </div>
          </a>
          <HashLink to="/#about" id="banner-link-top-for-about">
            <div className="banner-link-top-about-content">		
              <i className="fa fas fa-chevron-down"></i>
            </div>
          </HashLink>
        </div>
      </section>
    );
  }
  
export default Banner;
