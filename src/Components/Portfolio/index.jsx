import {useState , useEffect } from 'react' ;
import { ProjectsListData } from '../../Data/ProjectsData';
import { motion, AnimatePresence } from 'framer-motion' ;
import './Portfolio.scss';


function Portfolio() {
    
    const [filteredProjects,setFilteredProjects] = useState([]);
    const [activeGenre, setActiveGenre] = useState("all");
    
    const fetchProject = () =>{
      const projectList = ProjectsListData;
      setFilteredProjects(projectList);
    }

    useEffect(() => {
      fetchProject()
    }, [])

    useEffect(() => {
      const allProjects = ProjectsListData ;
      if(activeGenre === "all"){
        setFilteredProjects(allProjects);
        return;
      }
      let filteredProject = [] ;
      filteredProject = allProjects.filter((project)=> project.genre.includes(activeGenre));
      setFilteredProjects(filteredProject);
    }, [activeGenre])

    return (
      <section id="portfolio">
        <h1>portfolio</h1>
        <div className="portfolio-filter">
          <button onClick={() =>{setActiveGenre("all")}} className={activeGenre === "all" ? "active" : ''}>Tous</button>
          <button onClick={() =>{setActiveGenre("infographie")}} className={activeGenre === "infographie" ? "active" : ''}>Infographie</button>
          <button onClick={() =>{setActiveGenre("web")}} className={activeGenre === "web" ? "active" : ''} >Web</button>
          <button onClick={() =>{setActiveGenre("jeu")}} className={activeGenre === "jeu" ? "active" : ''} >Game</button>
          
        </div>
        <motion.div layout className="portfolio-projects-container" >	
          <AnimatePresence >
              {filteredProjects.map((project,index) => (
                <motion.div   animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}}  layout className="portfolio-card" key={project.id}>
                  <div className="portfolio-card-img">	
                      <img src={process.env.PUBLIC_URL + '/img/'+project.image} alt={project.alt} />	
                  </div>	
                  <div className="portfolio-card-text">
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <div className="card-frameworks">{project.frameworks}</div>
                    <div className="card-links">
                      { project.codeLink  &&
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-github"></i>
                        </a>
                      }
                      { project.demoLink &&
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <i className="fa-regular fa-eye"></i>
                        </a>
                      }
                    
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div >

      </section>
    );
  }
  
export default Portfolio;