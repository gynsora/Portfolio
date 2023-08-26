import {  ExperiencesListData } from '../../Data/ExperiencesData'
import './Experiences.scss'

function Experiences() {
    const ExperiencesList = ExperiencesListData ;
    return (
      <section id="experiences">
        {ExperiencesList.map((experienceType,index) => (
            <div className="experiences" key={experienceType.title}>
                <h3 className="title"><span>{experienceType.title.slice(0,3)}</span>{experienceType.title.slice(3)}</h3>
                <div className="row">
                    <div className="timeline-box padd-15">
                        <div className="timeline shadow-dark">

                            {experienceType.lst.map((experience,index) => (
                                <div className="timeline-item" key={experience.title}>
                                    <div className="circle-dot"></div>
                                    <h3 className="timeline-date">
                                        <i className="fa fa-calendar"></i> {experience.date}
                                    </h3>
                                    <h4 className="timeline-title">{experience.title}</h4>
                                    <p className="timeline-text">
                                        {experience.description}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        ))}

      </section>
    );
  }
  
export default Experiences;