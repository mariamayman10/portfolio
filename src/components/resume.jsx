import styles from "./resume.module.css";
import cv from '../assets/Mariam_Ayman.pdf';
function Resume() {
  return (
    <section id="resume" className={styles.resume}>
      <div className={styles.resumeWrapper}>
        <h2 className={styles.title}>Resume</h2>

        <p className={styles.summary}>
          A snapshot of my professional journey, technical expertise, and
          academic background. Passionate about building scalable, clean,
          high-performance applications with a strong focus on user experience.
        </p>

        <div className={styles.action}>
          <a href={cv} download className={styles.primaryBtn}>
            Download CV
          </a>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <h3>Full-Stack Developer</h3>
            <span>2025 – Present</span>
            <p>
              Developing scalable web applications using modern frontend and
              backend technologies. Focused on clean architecture, performance
              optimization, and maintainable systems.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <h3>B.Sc. Computer Science</h3>
            <span>Cairo University — 2025</span>
            <p>
              Graduated with a strong foundation in software engineering, data
              structures, databases, and system design principles.
            </p>
          </div>
        </div>

        <div className={styles.availability}>
          <span className={styles.badge}></span>
          Open to Full-Stack Developer & Software Engineer opportunities
        </div>
      </div>
    </section>
  );
}

export default Resume;
