import Banner from '../Components/Banner'
import Menu from '../Components/Menu'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Experiences from '../Components/Experiences'
import Portfolio from '../Components/Portfolio'
import Footer from '../Components/Footer'

//import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss'

function Home() {
  return (
    <div id="home">
      <Menu/>
      <Banner/>
      <About/>
      <Skills/>
      <Experiences/>
      <Portfolio/>
      <Footer/>
    </div>
    
  );
}

export default Home;
