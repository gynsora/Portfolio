import imgNadjim from '../../Assets/img/nadjim.png'
import { TypeAnimation } from 'react-type-animation';
import './About.scss'


function About() {
    return (
      <section id="about">
        <div className="about-image">
          <img src={ imgNadjim } alt="image de nadjim DJAMANI" />
        </div>
        <div className="about-content">
          <h1>Hello ! Je m'appelle DJAMANI Nadjim</h1>
          <h3>
            <TypeAnimation 
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Développeur Front-End',
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              'Programmeur  Python',
              2000,
              'Développeur React',
              2000,
              'Programmeur Symfony',
              2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            />
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod fuga, unde asperiores nisi totam voluptate similique, ducimus corporis voluptas facere! Nisi amet eligendi quam praesentium asperiores quia.</p>
          <div className="about-social-media">
            <a href="https://www.linkedin.com/in/nadjim-djamani-759b79140/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/gynsora" target="_blank"><i class="fa-brands fa-github"></i></a>
          </div> 
          <div className="about-links">
            <a href="/CV développeur informatique.pdf" target="_blank" className="about-btn">Télécharger CV</a> 
            <a href="#footer" className="about-btn">Contactez-moi</a>
          </div>
        </div>
      </section>
    );
  }
  
export default About;