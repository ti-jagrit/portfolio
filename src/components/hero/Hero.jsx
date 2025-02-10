import React from "react";
import "./hero.css";
import person from "../../assets/person.png";
import hire from "../../assets/hire.png";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-text">
       <span className="hello"> Hello, </span>
        <div className="text-head">
          I'm <span className="text-head-yellow"> Jagrit</span>
          <p>Intrested In Backend</p>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ab.
        </div>
        {/* hire me icne and text */}
       <Link className="hire-btn">
          <img src={hire} alt="" className="hire" /> Hire me
        </Link>
      </div>
      {/* for user image */}
      <div className="side-image">
        <img src={person} alt="Person-Image" className="hero-img" />
      </div>
    </section>
  );
};

export default Hero;
