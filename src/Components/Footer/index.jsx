import './Footer.scss'
//la classe page-home-max-width est défini dans index.scss
function Footer() {
    return (
      <footer id="footer" className="page-home-max-width">
        <div className="footer-cv">
          <a href={process.env.PUBLIC_URL + "/CV JAVA.pdf"}  target="_blank" rel="noopener noreferrer"> 
            Télécharger CV
          </a>
        </div>
        <div className="footer-social">
            <a href="https://www.linkedin.com/in/nadjim-djamani-759b79140/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/gynsora" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
        </div>
        <div className="footer-mail">
          <i className="fa-regular fa-envelope"></i> djamaninadjim@gmail.com
        </div>
        <div className="footer-copyright">© 2023 Nadjim DJAMANI, Tous droits réservés.</div>
      </footer>
    );
  }
  
export default Footer;