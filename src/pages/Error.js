import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  console.log("there was an error");
  return (
    <section className="error">
      <div className="error__wrapper">
        <p className="error__message">
          Error <span>404</span>. Page not found.
        </p>

        <Link to="/" className="error__home-link-btn">
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
