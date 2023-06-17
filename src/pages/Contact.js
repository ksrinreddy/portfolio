import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact__title">contact</h2>
      <h4 className="contact__subtitle">Let's Talk!</h4>
      <div className="contact__wrapper">
        <div className="contact__info">
          <div className="contact__card">
            <HiMail className="email-icon" />
            <a
              href="mailto:ksrinreddy@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              ksrinreddy@gmail.com
            </a>
          </div>
          <div className="contact__card">
            <FaPhoneSquareAlt className="phone-icon" />
            <a href="tel:+916281850688">+91-6281850688</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
