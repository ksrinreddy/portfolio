import React from "react";
import { portfolioBuildLinks } from "../assets/data/projects";

const Portfolio = () => {
  return (
    <div className="project no-border-bottom">
      {/* card */}
      <div className="project__card">
        <div className="project__title-card">Portfolio</div>

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
        <h4 className="project__title-text">Portfolio</h4>
      </div>
      {/* info */}
      <div className="project__info">
        <div className="project__info-wrapper">
          <span className="project__info-heading">Info</span>
          <div className="project__info-text-wrapper">
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
  );
};

export default Portfolio;
