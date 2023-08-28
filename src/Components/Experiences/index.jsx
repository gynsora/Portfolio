import {  ExperiencesListData } from '../../Data/ExperiencesData';
import { motion } from 'framer-motion' ;
import './Experiences.scss';

function Experiences() {
    const ExperiencesList = ExperiencesListData ;
    return (
      <section id="experiences">
        {ExperiencesList.map((experienceType,index) => (
            <motion.div className="experiences" key={experienceType.title} initial={{opacity:0 , scale:0}} whileInView={{opacity:1 , scale:1}} transition={{duration:.6}} >
                <h3 className="title"><span>{experienceType.title.slice(0,3)}</span>{experienceType.title.slice(3)}</h3>
                <div className="row">
                    <div className="timeline-box padd-15">
                        <div className="timeline">

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
            </motion.div>
        ))}

      </section >
    );
  }
  
export default Experiences;