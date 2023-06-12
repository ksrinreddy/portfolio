import React from "react";
import projects from "../assets/data/projects";
import Project from "../components/Project";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects__title">projects</h2>
      <div className="projects__wrapper">
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
