import React from "react";
import {
  netflixBuildBg,
  netflixBuildLinks,
  netflixBuildTools,
} from "../assets/data/projects";

const NetflixClone = () => {
  return (
    <div className="project">
      {/* card */}
      <div className="project__card">
        <img src={netflixBuildBg} alt="project logo" className="project__img" />
        <div className="project__card-overlay">
          <div className="project__web-links">
            {netflixBuildLinks?.map((link) => {
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
        <h4 className="project__title">Netflix Clone</h4>
      </div>
      {/* info */}
      <div className="project__info">
        <div className="project__info-wrapper">
          {/* tools */}
          <div className="project__info-tools">
            <span className="project__info-heading">Tools</span>
            <div className="project__tools-wrapper">
              {netflixBuildTools?.map((tool) => {
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
                Cloned frontend build of Netflix app as Single Page Application
                using React.
              </p>
              <p>
                Build includes Landing page, SignUp page, SignIn page, User
                page, Protected Route and other features.
              </p>
              <p>
                Setup navigation within and outside the app with the help of
                React-Router-v6.
              </p>
              <p>Managed client state and server states using ReduxToolkit.</p>
              <p>Worked with RESTfulAPIs and Axios to fetch movies data.</p>
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
    </div>
  );
};

export default NetflixClone;
