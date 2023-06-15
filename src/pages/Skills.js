import React from "react";
import { skills } from "../assets/data/skills";
import Skill from "../components/Skill";

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills__title">skills</h2>
      <div className="skills__wrapper">
        {skills.map((skill) => {
          return <Skill key={skill.id} skill={skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
