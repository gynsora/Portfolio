import Banner from '../Components/Banner'
import Menu from '../Components/Menu'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Experiences from '../Components/Experiences'
import Projects from '../Components/Projects'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
      <Menu/>
      <Banner/>
      <About/>
      <Skills/>
      <Experiences/>
      <Projects/>
      <Footer/>
    </div>
    
  );
}

export default Home;
