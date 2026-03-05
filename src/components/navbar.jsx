import { useState } from "react";
import Logo from "./logo";
import { useWindowSize } from "../hooks/useWindowSize";
import styles from "./navbar.module.css";

function Navbar() {
  const [selectedLink, setSelectedLink] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { width } = useWindowSize();

  const links = [
    { name: "home", label: "Home" },
    { name: "about", label: "About" },
    { name: "skills", label: "Skills" },
    { name: "projects", label: "Projects" },
    { name: "resume", label: "Resume" },
    { name: "contact", label: "Contact" },
  ];

  const handleSelecting = (name) => {
    setSelectedLink(name);
    const section = document.getElementById(name);
    const sectionTop = section.offsetTop - 110;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
    setMobileOpen(false);
  };

  const isDesktop = width > 900;

  return (
    <nav className={isDesktop ? styles.navDesktop : styles.navMobile}>
      {isDesktop ? (
        <>
          <div className={styles.navLeft}>
            {links.slice(0, 3).map((link) => (
              <li
                key={link.name}
                onClick={() => handleSelecting(link.name)}
                className={selectedLink === link.name ? styles.navActive : ""}
              >
                {link.label}
              </li>
            ))}
          </div>
          <div className={styles.logoDiv}>
            <Logo />
          </div>
          <div className={styles.navRight}>
            {links.slice(3).map((link) => (
              <li
                key={link.name}
                onClick={() => handleSelecting(link.name)}
                className={selectedLink === link.name ? styles.navActive : ""}
              >
                {link.label}
              </li>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className={styles.logoDiv}>
            <Logo />
            <span>ARIAM</span>
          </div>
          <div
            className={styles.hamburger}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            ☰
          </div>
          {mobileOpen && (
            <ul className={styles.mobileMenu}>
              {links.map((link) => (
                <li
                  key={link.name}
                  onClick={() => handleSelecting(link.name)}
                  className={selectedLink === link.name ? styles.navActive : ""}
                >
                  {link.label}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </nav>
  );
}

export default Navbar;
