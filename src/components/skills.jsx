import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
  faReact,
  faAngular,
  faNodeJs,
  faGitAlt,
  faJs,
  faTypescript,
  faPostgresql,
  faTailwindCss,
} from "@fortawesome/free-brands-svg-icons";
import expressIcon from "../assets/icons/express-icon.png";
import mongoIcon from "../assets/icons/mongo-icon.png";
import styles from "./skills.module.css";

const skills = [
  { name: "HTML", icon: faHtml5, color: "#E34F26" },
  { name: "CSS", icon: faCss3Alt, color: "#1572B6" },
  { name: "Sass", icon: faSass, color: "#CC6699" },
  { name: "Bootstrap", icon: faBootstrap, color: "#7952B3" },
  { name: "Tailwind", icon: faTailwindCss, color: "#06B6D4" },
  { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: faTypescript, color: "#3178C6" },
  { name: "React", icon: faReact, color: "#61DAFB" },
  { name: "Angular", icon: faAngular, color: "#DD0031" },
  { name: "Node.js", icon: faNodeJs, color: "#339933" },
  { name: "Express.js", icon: expressIcon, color: "#000000" },
  { name: "PostgreSQL", icon: faPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: mongoIcon, color: "#47A248" },
  { name: "Git", icon: faGitAlt, color: "#F05032" },
];
function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <p className={styles.skillsTitle}>My Skills</p>
      <div className={styles.skillsWrapper}>
        {skills.map((skill) => {
          return (
            <div key={skill.name} className={styles.skillCard}>
              {skill.name !== "Express.js" && skill.name !== "MongoDB" ? (
                <FontAwesomeIcon
                  icon={skill.icon}
                  size="2xl"
                  color={skill.color}
                />
              ) : (
                <img src={skill.icon} width={38} />
              )}
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
