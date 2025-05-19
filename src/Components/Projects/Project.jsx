import React from "react";
import projectsData from "./../../Data/Project.json";
import { getImageUrl } from "./../../utils";
import styles from "./Project.module.css";

export const Project = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.projectsWrapper}>
        {projectsData.projects.map((project, id) => (
          <div key={id} className={styles.projectCard}>
            {project.imageSrc && (
              <img
                src={getImageUrl(project.imageSrc)}
                alt={`Image of ${project.title}`}
                className={styles.projectImage}
              />
            )}
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <ul className={styles.skillsList}>
              <p className={styles.language}>Language Used:</p>
              {project.skills.map((skill, index) => (
                <li key={index} className={styles.skillItem}>
                  {skill}
                </li>
              ))}
            </ul>
            <div className={styles.linksWrapper}>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Demo
                </a>
              )}
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Source
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
