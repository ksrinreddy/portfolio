import React from "react";
import socialLinks from "../assets/data/socialLinks";
import aboutPhoto from "../assets/images/about-photo.jpg";

const About = () => {
  return (
    <section className="about">
      <h2 className="about__title">about</h2>
      <div className="about__wrapper">
        {/* photo */}
        <img src={aboutPhoto} alt="about" className="about__img" />
        {/* info */}
        <div className="about__info">
          <p>
            React focused Junior Frontend Developer with good foundation in
            JavaScript and related libraries and frameworks. Built few personal
            projects which helped in acquiring basic experience of translating
            design layouts into fully functional, user-friendly and responsive
            user interfaces. It also helped in familiarizing with debugging
            code, identifying and solving problems that arise during the build
            process. Got familiar with using Git to manage and track code
            changes and GitHub for hosting source code. Looking forward for an
            opportunity to apply my skills to build elegant, efficient, reusable
            and responsive user interfaces.
          </p>
        </div>
        {/* social links */}
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
    </section>
  );
};

export default About;
