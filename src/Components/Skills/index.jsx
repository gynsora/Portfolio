import './Skills.scss'


function Skills() {
  const SkillsList = [
    {
      "name": "HTML/CSS",
      "percent": "90%",
      "class" : "ninety"
    },
    {
      "name": "SASS",
      "percent": "75%",
      "class" : "seventy-five"
    },
    {
      "name": "Javascript",
      "percent": "80%",
      "class" : "eighty"
    },
    {
      "name": "React",
      "percent": "60%",
      "class" : "sixty"
    },
    {
      "name": "PHP",
      "percent": "75%",
      "class" : "seventy-five"
    },
    {
      "name": "Symfony",
      "percent": "60%",
      "class" : "sixty"
    },
    {
      "name": "Python",
      "percent": "75%",
      "class" : "seventy-five"
    },
    {
      "name": "Pygame",
      "percent": "70%",
      "class" : "seventy"
    }
  ];


  return (
      <section id="skills">
        <div className="skills-header skills-head">
          <h2>Mes <span>Compétences</span></h2>
          <p>Voici un représentation des mes compétences actuelles</p>
        </div>
        <div className="skills-main">

          {SkillsList.map((skill,index) => (
            <div className="skill-bar">
              <div className="skill-info">
                <p>{skill.name}</p>
                <p className="percent">{skill.percent}</p>
              </div>
              <div className="bar">
                <span className={skill.class}></span>
              </div>
            </div>
          ))}
          
        </div>
      </section>
    );
  }
  
export default Skills;

/* <div className="skills-container">
          <h1>Front-end</h1>
          <li>
            <h3>HTML</h3>
            <span className="bar">
                <span className="html"></span>
            </span>
          </li>
          <li>
            <h3>CSS</h3>
            <span className="bar">
                <span className="css"></span>
            </span>
          </li>
          <li>
            <h3>Javascript</h3>
            <span className="bar">
                <span className="javascript"></span>
            </span>
          </li>
          <li>
            <h3>React</h3>
            <span className="bar">
                <span className="react"></span>
            </span>
          </li>

        </div>
        <div className="skills-container">
          <h1>Front-end</h1>
          <li>
            <h3>HTML</h3>
            <span className="bar">
                <span className="html"></span>
            </span>
          </li>
          <li>
            <h3>CSS</h3>
            <span className="bar">
                <span className="css"></span>
            </span>
          </li>
          <li>
            <h3>Javascript</h3>
            <span className="bar">
                <span className="javascript"></span>
            </span>
          </li>
          <li>
            <h3>React</h3>
            <span className="bar">
                <span className="react"></span>
            </span>
          </li>

        </div> */