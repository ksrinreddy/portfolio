import React from "react";
import { resumeBuildLinks } from "../assets/data/projects";

const Resume = () => {
  return (
    <div className="project no-border-bottom">
      {/* card */}
      <div className="project__card">
        <div className="project__title-card">Resume</div>
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
        <h4 className="project__title-text">Resume</h4>
      </div>
      {/* info */}
      <div className="project__info">
        <div className="project__info-wrapper">
          <div className="project__desc">
            <span className="project__info-heading">Info</span>
            <div className="project__info-text-wrapper">
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
