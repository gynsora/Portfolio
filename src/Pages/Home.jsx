import Banner from '../Components/Banner'
import Menu from '../Components/Menu'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Experiences from '../Components/Experiences'
import Portfolio from '../Components/Portfolio'
import Footer from '../Components/Footer'
import ThemeSwitch from '../Components/ThemeSwitch'
import { useContext } from "react";
import { ThemeContext , ColorContext } from '../Utils/Context';
import './Home.scss'
//  ${color}
function Home() {
  const { theme } = useContext(ThemeContext);
  const { color } = useContext(ColorContext);
  return (
    <div id="home" className={` ${theme === 'light' ? '' :'dark'} ${color}`} >
      <Menu/>
      <ThemeSwitch/>
      <main>
        <Banner/>
        <About/>
        <Skills/>
        <Experiences/>
        <Portfolio/>
      </main>
      <Footer/>
    </div>
    
  );
}

export default Home;
