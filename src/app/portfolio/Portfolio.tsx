"use client";
import { useEffect, useState } from "react";
import { Project } from "@/types/app.types";
import styles from "./page.module.css";
import HomeLayoutComponent from "@/components/HomeLayout";
import projectList from "./projects.json";

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [selectedTech, setSelectedTech] = useState<string>("all");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    console.log("Projects loaded:", projectList);

    setProjects(projectList);
    const techSet = new Set<string>();
    projectList.forEach((project) => {
      project.tech.forEach((tech) => techSet.add(tech));
    });

    setTechnologies(Array.from(techSet));
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

  const PortfolioContent = (
    <>
      <h2>Portfolio</h2>
      <div className={styles.filterSort}>
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

      <div id="projects" className={styles.project_container}>
        {displayedProjects.map((project, index) => (
          <div key={index} className={styles.project}>
            {/* TODO: Add images */}
            <div className={styles.project_image}>{/* <img src={project.image || null} alt={`Screenshot of ${project.title}`} /> */}</div>
            <div className={styles.project_info}>
              <h3 className={styles.project_title}>{project.title}</h3>
              <p className={styles.project_description}>{project.description}</p>
              <div className={styles.project_tech_container}>
                {project.tech.map((tech, index) => (
                  <span key={index} className={styles.project_tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.project_links}>
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

  return <HomeLayoutComponent content={PortfolioContent} />;
}
