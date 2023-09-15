import React from "react";
import { netflixBuildLinks } from "../assets/data/projects";

const NetflixClone = () => {
  return (
    <div className="project">
      {/* card */}
      <div className="project__card">
        <div className="project__title-card text-red">NETFLIX</div>
        <div className="project__card-overlay">
          <div className="project__web-links">
            {netflixBuildLinks.map((link) => {
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
        <h4 className="project__title-text">Netflix Clone</h4>
      </div>
      {/* info */}
      <div className="project__info">
        <div className="project__info-wrapper">
          <span className="project__info-heading">Info</span>
          <div className="project__info-text-wrapper">
            <p>
              Cloned frontend build of Netflix app as Single Page Application
              using React.
            </p>
            <p>
              Build includes Landing page, SignUp page, SignIn page, User page,
              Protected Route and other features.
            </p>
            <p>
              Setup navigation within and outside the app with the help of
              React-Router-v6.
            </p>
            <p>Managed client state and server states using ReduxToolkit.</p>
            <p>Worked with REST APIs and Axios to fetch movies data.</p>
            <p>Styled app with the help of Sass.</p>
            <p>
              Utilized Git for managing version control and GitHub for web
              hosting codebase.
            </p>
            <p>Deployed app using Netlify.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetflixClone;
