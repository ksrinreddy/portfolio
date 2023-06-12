import React, { useEffect } from "react";
import { useState } from "react";

import socialLinks from "../assets/data/socialLinks";

const Footer = () => {
  const [year, setYear] = useState(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <div className="footer__content-wrapper">
        <p className="footer__logo">ksrinreddy</p>
        <div className="footer__social-links">
          {socialLinks.map((socialLink) => {
            const { id, url, icon } = socialLink;
            return (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                key={id}
                className="footer__social-link"
              >
                {icon}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
