import React from "react";
import "./skills.css";

const Skills = (props) => {
  return (
    <div>
      <section className="skills">
        <div className="skills-img-continer">
          <img
            src={props.logo}
            alt={`${props.text} logo`}
            className="skill-img"
          />
        </div>
        <div className="skills-text-continer">
          <p className="skills-head">{props.text}</p>
          <p className="skills-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            voluptatum reiciendis assumenda veritatis cum vel nihil
          </p>
        </div>
      </section>
    </div>
  );
};

export default Skills;
