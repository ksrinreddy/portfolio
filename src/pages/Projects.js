import React from "react";
import NetflixClone from "../components/NetflixClone";
import Portfolio from "../components/Portfolio";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects__title">projects</h2>
      <div className="projects__wrapper">
        <NetflixClone />
        <Portfolio />
      </div>
    </section>
  );
};

export default Projects;
