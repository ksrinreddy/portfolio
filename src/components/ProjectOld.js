import React from "react";

const ProjectOld = ({
  backgroundImg,
  links,
  description,
  title,
  languages,
  libraries,
  vcWhServices,
}) => {
  return (
    <div className="project">
      {/* card */}
      <div className="project__card">
        <img src={backgroundImg} alt="project logo" className="project__img" />
        <div className="project__card-overlay">
          <div className="project__web-links">
            {links?.map((link) => {
              const { id, url, icon } = link;
              return (
                <a
                  href={url}
                  key={id}
                  target="_blank"
                  rel="noreferrer"
                  className="project__web-link"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
        <h4 className="project__title">{title}</h4>
      </div>
      {/* info */}
      <div className="project__info">
        <h4 className="project__info-title">{description}</h4>
        <div className="project__info-wrapper">
          {/* languages */}
          <div className="project__languages">
            {languages?.map((language) => {
              const { id, name, img, url } = language;
              return (
                <div className="project__language" key={id}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="project__language-link"
                  >
                    <img
                      src={img}
                      alt={name}
                      className="project__language-logo"
                    />
                  </a>
                </div>
              );
            })}
          </div>
          {/* libraries */}
          <div className="project__libraries">
            {libraries?.map((library) => {
              const { id, name, img, url } = library;
              return (
                <div className="project__library" key={id}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="project__library-link"
                  >
                    <img
                      src={img}
                      alt={name}
                      className="project__library-logo"
                    />
                  </a>
                </div>
              );
            })}
          </div>
          {/* version control and web hosting services */}
          <div className="project__vcwh-services">
            {vcWhServices?.map((vcWhService) => {
              const { id, name, img, url } = vcWhService;
              return (
                <div className="project__vcwh-service" key={id}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="project__vcwh-service-link"
                  >
                    <img
                      src={img}
                      alt={name}
                      className="project__vcwh-service-logo"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOld;
