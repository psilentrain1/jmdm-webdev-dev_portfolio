"use client";
import { useEffect, useState } from "react";
import { Project } from "@/types/app.types";

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [selectedTech, setSelectedTech] = useState<string>("all");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    fetch("./projects.json")
      .then((response) => response.json())
      .then((data: Project[]) => {
        console.log(data);
        setProjects(data);

        const techSet = new Set<string>();
        data.forEach((project) => {
          project.tech.forEach((tech) => techSet.add(tech));
        });

        setTechnologies(Array.from(techSet));
      })
      // Swap this out to add to log
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  function handleSort() {
    setSortDirection((prevDirection) => (prevDirection === "asc" ? "desc" : "asc"));
  }

  const displayedProjects = [...projects]
    .filter((project) => selectedTech === "all" || project.tech.includes(selectedTech))
    .sort((a, b) => {
      if (sortDirection === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

  return (
    <>
      <h2>Projects</h2>
      <div className="filterSort">
        <div>
          <label htmlFor="filter">Technology: </label>
          <select name="filter" id="filter" value={selectedTech} onChange={(e) => setSelectedTech(e.target.value)}>
            <option value="all">All</option>
            {technologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="sort">Sort: </label>
          <button type="button" id="sort" onClick={handleSort}>
            {sortDirection === "asc" ? "↑" : "↓"}
          </button>
        </div>
      </div>

      <div id="projects" className="project_container">
        {displayedProjects.map((project, index) => (
          <div key={index} className="project">
            <div className="project-image">
              <img src={project.image || ""} alt={`Screenshot of ${project.title}`} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Technologies: </strong>
                {project.tech.join(", ")}
              </p>
              <div className="links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
