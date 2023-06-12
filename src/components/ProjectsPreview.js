import React from "react";
import projects from "../assets/data/projects";
import ProjectPreview from "./ProjectPreview";

const ProjectsPreview = () => {
  return (
    <section className="projects-preview">
      <h2 className="projects-preview__title">projects</h2>
      <div className="projects-preview__wrapper">
        {projects.map((project) => {
          return <ProjectPreview key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default ProjectsPreview;
