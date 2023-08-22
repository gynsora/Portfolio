import './Banner.scss';


function Banner() {
    return (
      <section id="home">
        <div id="banner" className="banner-landing-text">
          <h1>Nadjim Djamani</h1>
          <h6>Développeur Web fullstack junior</h6>
          <a href="/CV développeur informatique.pdf" target="_blank"> 
            <div className="banner-download-cv">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Télécharger CV
            </div>
          </a>
          <a href="#about" id="banner-link-top-for-about">
            <div className="banner-link-top-about-content">		
              <i className="fa fas fa-chevron-down"></i>
            </div>
          </a>
        </div>
      </section>
    );
  }
  
export default Banner;
