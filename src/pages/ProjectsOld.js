import React from "react";
import projects from "../assets/data/projects";
import ProjectOld from "../components/ProjectOld";

const ProjectsOld = () => {
  return (
    <section className="projects">
      <h2 className="projects__title">projects</h2>
      <div className="projects__wrapper">
        {projects.map((project) => {
          return <ProjectOld key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default ProjectsOld;
