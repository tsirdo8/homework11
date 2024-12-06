import React from "react";
import './Projects.css'

const projects = [
  {
    name: "Homework10",
    github: "https://github.com/tsirdo8/homework10.git",
    live: "https://homework10-seven.vercel.app",
  },
  {
    name: "Homework9",
    github: "https://github.com/tsirdo8/homework9.git",
    live: "https://homework9-nine.vercel.app",
  },
  {
    name: "Homework8",
    github: "https://github.com/tsirdo8/homework8.git",
    live: "https://homework8-iota.vercel.app",
  },
  {
    name: "Homework7",
    github: "https://github.com/tsirdo8/homework7.git",
    live: "https://homework7-cyan.vercel.app",
  },
  {
    name: "Homework6",
    github: "https://github.com/tsirdo8/homework6.git",
    live: "https://homework6-kappa.vercel.app",
  },
];


const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.name}</h3>
          <div className="links">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live Preview
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
