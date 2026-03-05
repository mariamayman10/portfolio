import styles from "./about.module.css";
import Profile from "./profile";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutInfo}>
          <p className={styles.aboutTitle}>About me</p>
          <p className={styles.aboutDesc}>
            I am a Full-Stack Software Engineer specializing in building
            scalable, high-performance web applications with a strong focus on
            clean architecture and user experience. My primary expertise is in
            React, where I create responsive, intuitive, and visually engaging
            interfaces. <br />
            <br />
            Beyond the frontend, I design and implement structured, maintainable
            systems that prioritize performance, clarity, and long-term
            scalability. I am comfortable working across different database
            paradigms and adapting to project requirements with a
            solution-oriented mindset.
            <br />
            <br /> I am driven by writing clean code, optimizing performance,
            refining UI/UX details, and solving complex problems. Open to
            opportunities as a Full-Stack Developer or Software Engineer where I
            can contribute to building impactful digital products.
          </p>
        </div>
        <Profile />
      </div>
    </section>
  );
}

export default About;
