import React from "react";
import skills from "./../../../src/Data/skills.json";
import history from "./../../../src/Data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img
                  src={getImageUrl(skill.imageSrc)}
                  alt={skill.title || "Skill Image"}
                />
              </div>
              <p>{skill.name}</p>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>

        <ul className={styles.history}>
          <h2 className={styles.title}>Experience</h2>
          {history.internship && (
            <li className={styles.historyItem}>
              {/* <img
                src={getImageUrl(history.internship.imageSrc)}
                alt={`${history.internship.company} Logo`}
              /> */}
              <div className={styles.historyItemDetails}>
                <h3>
                  {history.internship.role}, {history.internship.company}
                </h3>
                <p>
                  <strong>Start Date:</strong> {history.internship.start_date}
                </p>
                <p>
                  <strong>End Date:</strong> {history.internship.end_date}
                </p>
                <ul>
                  <li>{history.internship.description}</li>
                </ul>
              </div>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};