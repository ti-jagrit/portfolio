import React from 'react';
import './prothfolio.css';

const Projects = (props) => {
  return (
    <a href={props.link} target='_blank' className="project-container">
      <div className="project-img-container">
        <img src={props.img} alt={`${props.title} image`} className="project-img" />
      </div>
      <div className="project-details">
        <div className="project-title">
          {props.title}
        </div>
        <div className="project-desc">
          {props.desc}
        </div>
      </div>
    </a>
  );
}

export default Projects;
