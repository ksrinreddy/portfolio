import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error">
      <div className="error__wrapper">
        <p className="error__message">Page not found.</p>
        <Link to="/" className="error__home-link-btn">
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
