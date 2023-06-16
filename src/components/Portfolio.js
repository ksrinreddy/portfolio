import React from "react";
import {
  portfolioBuildBg,
  portfolioBuildLinks,
  portfolioBuildTools,
} from "../assets/data/projects";

const Portfolio = () => {
  return (
    <div className="project">
      {/* card */}
      <div className="project__card">
        <img
          src={portfolioBuildBg}
          alt="project logo"
          className="project__img"
        />
        <div className="project__card-overlay">
          <div className="project__web-links">
            {portfolioBuildLinks.map((link) => {
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
        <h4 className="project__title">Portfolio</h4>
      </div>
      {/* info */}
      <div className="project__info">
        <div className="project__info-wrapper">
          {/* tools */}
          <div className="project__info-tools">
            <span className="project__info-heading">Tools</span>
            <div className="project__tools-wrapper">
              {portfolioBuildTools.map((tool) => {
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
                Designed conceptually and Developed as Single Page Application
                using React.
              </p>
              <p>
                Navigation within and outside the app is setup using
                React-Router-v6.
              </p>
              <p>ContextAPI is used for client state management.</p>
              <p>Styled app with the help of Sass.</p>
              <p>
                Used Git for managing version control and GitHub for web hosting
                codebase.
              </p>
              <p>App deployed using Netlify.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
