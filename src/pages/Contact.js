import React from "react";
import { FaPhoneSquareAlt, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailMeMessage = () => {
    alert("Not yet setup form submission functionality.");
  };

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
          <div className="contact__card">
            <FaLinkedin className="linkedin-icon" />
            <a
              href="https://www.linkedin.com/in/ksrinreddy/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/ksrinreddy
            </a>
          </div>
        </div>
        <form className="contact__form" onSubmit={mailMeMessage}>
          <div className="contact__input-label-wrapper">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name" className={name && "filled-state"}>
              Name
            </label>
          </div>
          <div className="contact__input-label-wrapper">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email" className={email && "filled-state"}>
              Email
            </label>
          </div>

          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Write your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="contact__form-submit-btn">
            submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
