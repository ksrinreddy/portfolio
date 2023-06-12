import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import navLinks from "../assets/data/navLinks";
import { useGlobalContext } from "../context";
import resumePdf from "../assets/data/resume.pdf";

const Navbar = () => {
  const { setNavbarHeight, navbarRef, scrollHeight, toggleSidebar } =
    useGlobalContext();

  useEffect(() => {
    const navHeight = navbarRef.current.getBoundingClientRect().height;
    setNavbarHeight(navHeight);
  }, [scrollHeight]);

  return (
    <nav className="nav" ref={navbarRef}>
      <div className="nav__center">
        <div className="nav__header">
          <Link to="/" className="nav__logo">
            ksrinreddy
          </Link>
          <div className="nav__links">
            {navLinks.map((navLink) => {
              const { id, url, text } = navLink;
              return (
                <NavLink key={id} to={`${url}`} className="nav__link">
                  {text}
                </NavLink>
              );
            })}
            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="nav__resume-link"
            >
              Resume
            </a>
          </div>
          <button
            type="button"
            className="nav__toggle-btn"
            onClick={toggleSidebar}
          >
            <FaBars className="nav__toggle-icon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
