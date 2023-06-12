import React from "react";

const Project = ({
  backgroundImg,
  links,
  description,
  title,
  languages,
  libraries,
  versionControlSystem,
  internetHostingService,
  deployPlatform,
}) => {
  const { name: vcsName, img: vcsImg, url: vcsUrl } = versionControlSystem;
  const { name: ihsName, img: ihsImg, url: ihsUrl } = internetHostingService;
  const { name: dpName, img: dpImg, url: dpUrl } = deployPlatform;
  return (
    <div className="project">
      {/* card */}
      <div className="project__card">
        <img src={backgroundImg} alt="project logo" className="project__img" />
        <div className="project__card-overlay">
          <div className="project__web-links">
            {links.map((link) => {
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
            {languages.map((language) => {
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
            {libraries.map((library) => {
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
          <div className="project__vcs-ihs-dp-wrapper">
            {/* version control system */}
            <div className="project__vcs">
              <a
                href={vcsUrl}
                target="_blank"
                rel="noreferrer"
                className="project__vcs-link"
              >
                <img src={vcsImg} alt={vcsName} className="project__vcs-logo" />
              </a>
            </div>
            {/* internet hosting service */}
            <div className="project__ihs">
              <a
                href={ihsUrl}
                target="_blank"
                rel="noreferrer"
                className="project__ihs-link"
              >
                <img src={ihsImg} alt={ihsName} className="project__ihs-logo" />
              </a>
            </div>
            {/* deploy platform */}
            <div className="project__dp">
              <a
                href={dpUrl}
                target="_blank"
                rel="noreferrer"
                className="project__dp-link"
              >
                <img src={dpImg} alt={dpName} className="project__dp-logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
