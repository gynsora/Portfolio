import imgNadjim from '../../Assets/img/nadjim.png'
import { HashLink  } from "react-router-hash-link";
import { TypeAnimation } from 'react-type-animation';
import './About.scss'


function About() {
    return (
      <section id="about">
        <div className="about-image">
          <img src={ imgNadjim } alt="Nadjim DJAMANI" />
        </div>
        <div className="about-content">
          <h1>Hello ! Je m'appelle DJAMANI Nadjim</h1>
          <h3>
            <TypeAnimation 
            sequence={[
              'Développeur JAVA',
              2000, 
              'Programmeur Python',
              2000,
              'Développeur React',
              2000,
              'Intégrateur Front-End',
              2000,
              'Passionné de Jeux-vidéos',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            />
          </h3>
          <p>Après plusieurs années de travail dans le domaine de la manutention , j'ai décidé de me diriger vers un domaine pour lequel je me suis découvert une passion, la programmation et plus particulièrement le développement Web.</p>
          <div className="about-social-media">
            <a href="https://www.linkedin.com/in/nadjim-djamani-759b79140/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/gynsora" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
          </div> 
          <div className="about-links">
            <a href={process.env.PUBLIC_URL + "/CV développeur informatique.pdf"}  target="_blank" rel="noopener noreferrer" className="about-btn">Télécharger CV</a> 
            <HashLink to="/#footer" className="about-btn">Contactez-moi</HashLink>
            
          </div>
        </div>
      </section>
    );
  }
  
export default About;