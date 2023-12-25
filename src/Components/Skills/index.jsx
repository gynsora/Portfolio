import { SkillsListData } from '../../Data/SkillsData';
import './Skills.scss';


function Skills() {
  const SkillsList = SkillsListData ;

  return (
      <section id="skills" className="red">
        <div className="skills-header skills-head">
          <h2>Mes <span>Compétences</span></h2>
          <p>Voici un représentation des mes compétences actuelles</p>
        </div>
        <div className="skills-main">

          {SkillsList.map((skill,index) => (
            <div className="skill-bar" key={skill.name}>
              <div className="skill-info">
                <p>{skill.name}</p>
                <p className="percent">{skill.percent}</p>
              </div>
              <div className="bar">
                <span className={skill.className}></span>
              </div>
            </div>
          ))}
          
        </div>
      </section>
    );
  }
  
export default Skills;