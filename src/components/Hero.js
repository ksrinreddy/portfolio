import React from "react";
import { Link } from "react-router-dom";
import socialLinks from "../assets/data/socialLinks";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content-wrapper">
        <div className="hero__info">
          <div className="hero__header">
            <h3 className="hero__name">ksrin reddy</h3>
          </div>
          <h1 className="hero__role-title">
            Frontend <br /> React Developer
          </h1>
          <p className="hero__role-desc">
            Build simple and efficient user interfaces
          </p>
          <Link to="/projects" className="hero__projects-link">
            Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
