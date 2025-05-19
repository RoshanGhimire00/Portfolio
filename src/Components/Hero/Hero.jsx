import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi! Myself <br /> Roshan</h1>
        <p className={styles.description}>
          I am a passionate and aspiring MERN Stack Developer, currently
          pursuing my Bachelor of Computer Applications (BCA). With a keen
          interest in building dynamic and responsive web applications, I am
          continuously learning and refining my skills in MongoDB, Express.js,
          React.js, and Node.js.
        </p>

        <a
          href="mailto:ghimireroshan00@gmail.com"
          className={styles.contactBtn}
        >
          Contact me
        </a>
      </div>

      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of Roshan Ghimire"
        loading="lazy"
        className={styles.heroImg}
      />

      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};