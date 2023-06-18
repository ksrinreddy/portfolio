import React from "react";
import socialLinks from "../assets/data/socialLinks";
import portfolioPhoto from "../assets/images/portfolio-photo.jpg";

const About = () => {
  return (
    <section className="about">
      <h2 className="about__title">about</h2>
      <div className="about__wrapper">
        {/* photo */}
        <img src={portfolioPhoto} alt="porfile" className="about__img" />
        {/* info */}
        <div className="about__info">
          <p>
            Hello! I am Ksrin Reddy from Hyderabad, India. A Frontend Web
            Developer with focus on React. Cloned frontend build of Netflix app,
            designed conceptually and developed Portfolio and Resume as single
            page applications using React. Which made me realize significance of
            devTools during the build and debugging. Currently, looking forward
            for an opportunity where I can apply my skills and build elegant,
            user-friendly and efficient user interfaces.
          </p>
          <p>
            I love playing badminton, enjoy listening to music, like following
            cricekt.
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
