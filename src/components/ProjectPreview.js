import React from "react";

const ProjectPreview = ({ id, title, links, backgroundImg }) => {
  return (
    <div className="project-preview" key={id}>
      <div className="project-preview__card">
        <img
          src={backgroundImg}
          alt="project logo"
          className="project-preview__img"
        />
        <div className="project-preview__card-overlay">
          <div className="project-preview__web-links">
            {links.map((link) => {
              const { id, url, icon } = link;
              return (
                <a
                  href={url}
                  key={id}
                  target="_blank"
                  rel="noreferrer"
                  className="project-preview__web-link"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
        <h4 className="project-preview__title">{title}</h4>
      </div>
    </div>
  );
};

export default ProjectPreview;
