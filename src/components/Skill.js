import React from "react";
const Skill = ({ skill }) => {
  const { name, icon, url } = skill;
  return (
    <div className="skill">
      <a href={url} className="skill__card">
        <div className="skill__logo">{icon}</div>
        <p className="skill__name">{name}</p>
      </a>
    </div>
  );
};

export default Skill;
