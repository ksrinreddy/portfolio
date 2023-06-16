import React from "react";
import { Link } from "react-router-dom";
import socialLinks from "../assets/data/socialLinks";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content-wrapper">
        <div className="hero__info">
          <div className="hero__header">
            <h3 className="hero__name">ksrin reddy</h3>
          </div>
          <h1 className="hero__role-title">
            Frontend <br /> React Developer
          </h1>
          <p className="hero__role-desc">
            Builds simple and efficient user interfaces
          </p>
          {/* social links */}
          <div className="hero__social-links">
            {socialLinks.map((socialLink) => {
              const { id, url, icon } = socialLink;
              return (
                <a
                  href={url}
                  key={id}
                  target="_blank"
                  rel="noreferrer"
                  className="hero__social-link"
                >
                  {icon}
                </a>
              );
            })}
          </div>
          <Link to="/projects" className="hero__projects-link">
            Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
