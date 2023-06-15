import React from "react";
const Skill = ({ skill }) => {
  const { name, image, url } = skill;
  return (
    <div className="skill">
      <a href={url} className="skill__card">
        <img src={image} alt={name} className="skill__logo" />
        <p className="skill__name">{name}</p>
      </a>
    </div>
  );
};

export default Skill;
