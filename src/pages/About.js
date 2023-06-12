import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import socialLinks from "../assets/data/socialLinks";
import aboutImg from "../assets/images/about-img.png";

const About = () => {
  return (
    <section className="about">
      <h2 className="about__title">about</h2>
      <div className="about__wrapper">
        {/* card */}
        <div className="about__img-wrapper">
          <img src={aboutImg} alt="profile picture" className="about__img" />
          <div className="about__img-overlay">
            <div className="about__social-links">
              {socialLinks.map((socialLink) => {
                const { id, url, icon } = socialLink;
                return (
                  <a
                    href={url}
                    key={id}
                    target="_blank"
                    rel="noreferrer"
                    className="about__social-link"
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="about__info">
          <p className="about__info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            molestias dolores quo. Esse ipsum laborum ex dolor atque ullam.
            Minus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
