import React from "react";
import NavBar from "../navbar/NavBar";
import Card from "./card";
import { skills } from "./utils";
import './skills.css'

const Skills = () => {
  return (
    <>
      <NavBar />
      <span className="heading">Skills & Abilities</span>
      <div className="container skills">
        {skills.map((skill) => (
          <Card name={skill.name} icon={skill.icon} />
        ))}
      </div>
      
    </>
  );
};
export default Skills;
