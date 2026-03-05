import styles from "./projects.module.css";
import rightUpIcon from '../assets/icons/up right.png';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ProjectCard({ project }) {
  return (
    <div className={styles.project}>
      <div className={styles.card}>
        <div className={styles.cardInner}>
          <div className={styles.box}>
            <div className={styles.imgBox}>
              <img src={project.img} alt="project-img" />
            </div>

            <div className={`${styles.icon} ${project.live === null || project.repo === null ? styles.icon2: ''}`}>
              {project.live && (
                <a href={project.live} target="_blank">
                  <img src={rightUpIcon} width={40} />
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ color: "rgb(255, 255, 255)" }}
                    size="xl"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projectInfo}>
        <p className={styles.projectName}>{project.name}</p>
        <p className={styles.projectDesc}>{project.description}</p>
        <div className={styles.techs}>
          {project.tech.map((t) => (
            <p className={styles.tech}>{t}</p>
          ))}
        </div>
      </div>
    </div>
  );
}


export default ProjectCard;