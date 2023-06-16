import React from "react";
import socialLinks from "../assets/data/socialLinks";
import portfolioPhoto from "../assets/images/portfolio-photo.jpg";

const About = () => {
  return (
    <section className="about">
      <h2 className="about__title">about</h2>
      <div className="about__wrapper">
        {/* card */}
        <div className="about__img-wrapper">
          <img src={portfolioPhoto} alt="porfile" className="about__img" />
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
          <p>
            Hello! I am Ksrin Reddy from Hyderabad, India. A self-taught
            Frontend Web Developer with focus on React. Cloned frontend build of
            Netflix app, designed conceptually and developed Portfolio and
            Resume as single page applications using React. Like building simple
            and efficient user interfaces.
          </p>
          <p>
            Love playing badminton, enjoy listening to music, like following
            cricekt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
