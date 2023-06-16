import React from "react";
import {
  resumeBuildBg,
  resumeBuildLinks,
  resumeBuildTools,
} from "../assets/data/projects";

const Resume = () => {
  return (
    <div className="project no-border-bottom">
      {/* card */}
      <div className="project__card">
        <img src={resumeBuildBg} alt="project logo" className="project__img" />
        <div className="project__card-overlay">
          <div className="project__web-links">
            {resumeBuildLinks.map((link) => {
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
        <h4 className="project__title">Resume</h4>
      </div>
      {/* info */}
      <div className="project__info">
        <div className="project__info-wrapper">
          {/* tools */}
          <div className="project__info-tools">
            <span className="project__info-heading">Tools</span>
            <div className="project__tools-wrapper">
              {resumeBuildTools.map((tool) => {
                const { id, name, img, url } = tool;
                return (
                  <div key={id} className="project__tool">
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="project__tool-link"
                    >
                      <img
                        src={img}
                        alt={name}
                        className="project__tool-logo"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          {/* project desc */}
          <div className="project__desc">
            <span className="project__info-heading">Info</span>
            <div className="project__desc-text-wrapper">
              <p>
                Designed conceptually and developed using React, out of
                curiosity.
              </p>
              <p>Styled app using Styled-Components.</p>
              <p>
                Used Git for managing version control and GitHub for web hosting
                codebase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
