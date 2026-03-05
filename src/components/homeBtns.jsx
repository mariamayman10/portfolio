import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from './home.module.css';

function HomeBtns() {
  const [active, setActive] = useState("linkedin");

  return (
    <div className={styles.homeBtns}>
      <a
        className={active === "linkedin" ? styles.active : ""}
        onMouseEnter={() => setActive("linkedin")}
        onMouseLeave={() => setActive("linkedin")}
        href="https://www.linkedin.com/in/mariam-ayman0"
      >
        LinkedIn &nbsp;
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        className={active === "github" ? styles.active : ""}
        onMouseEnter={() => setActive("github")}
        onMouseLeave={() => setActive("linkedin")}
        href="https://github.com/mariamayman10"
      >
        GitHub &nbsp;
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}

export default HomeBtns;
