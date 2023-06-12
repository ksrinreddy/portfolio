import React from "react";
import { useGlobalContext } from "../context";
import { NavLink } from "react-router-dom";
import navLinks from "../assets/data/navLinks";
import resumePdf from "../assets/data/resume.pdf";
import { ImProfile } from "react-icons/im";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={
        isSidebarOpen
          ? "sidebar__links-wrapper"
          : "sidebar__links-wrapper sidebar__hide"
      }
    >
      <ul className="sidebar__links">
        {navLinks.map((sidebarLink) => {
          const { id, url, text, icon } = sidebarLink;
          return (
            <li key={id} className="sidebar__list-item">
              <NavLink
                to={`${url}`}
                className="sidebar__link"
                onClick={() => {
                  closeSidebar();
                }}
              >
                {icon}
                {text}
              </NavLink>
            </li>
          );
        })}

        <a
          href={resumePdf}
          target="_blank"
          rel="noreferrer"
          className="sidebar__resume-link"
        >
          <ImProfile />
          Resume
        </a>
      </ul>
    </aside>
  );
};

export default Sidebar;
