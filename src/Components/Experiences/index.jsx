import { FormationsListData , ExperiencesListData} from '../../Data/ExperiencesData'
import './Experiences.scss'

function Experiences() {
    const FormationsList = FormationsListData ;
    const ExperiencesList = ExperiencesListData ;
    return (
      <section id="experiences">
        
        <div className="education">
            <h3 className="title"><span>For</span>mations</h3>
            <div className="row">
                <div className="timeline-box padd-15">
                  <div className="timeline shadow-dark">
                    {FormationsList.map((formation,index) => (
                        <div className="timeline-item" key={formation.title}>
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                                <i className="fa fa-calendar"></i> {formation.date}
                            </h3>
                            <h4 className="timeline-title">{formation.title}</h4>
                            <p className="timeline-text">
                                {formation.description}
                            </p>
                        </div>
                    ))}
                  </div>
                </div>
            </div>
        </div>

        <div className="experiences">
            <h3 className="title"><span>exp</span>ériences</h3>
            <div className="row">
                <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                        {ExperiencesList.map((experience,index) => (
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
      </section>
    );
  }
  
export default Experiences;