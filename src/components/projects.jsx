import ProjectCard from "./projectCard";
import styles from "./projects.module.css";
import fishSouqPic from "../assets/projectScreen/fishSouq.png";
import usePopcornPic from "../assets/projectScreen/usePopcorn.png";
import weatherPic from "../assets/projectScreen/weatherApp.png";
import worldwisePic from "../assets/projectScreen/worldwise.png";
import postgresqlPic from "../assets/projectScreen/postgresql.png";

const projects = [
  {
    name: "Fish Souq",
    live: "https://fishsouq.vercel.app/home",
    repo: null,
    description:
      "Freelance project: Developed a responsive web application for browsing and managing fish products.",
    tech: [
      "Angular",
      "TypeScript",
      "HTML",
      "Sass",
      "Bootstrap",
      "SEO",
      "Responsive design",
      "Error handling",
      "UI/UX",
    ],
    img: fishSouqPic,
  },
  {
    name: "usePopcorn",
    live: "http://use-popcorn-rho-mocha.vercel.app",
    repo: "https://github.com/mariamayman10/usePopcorn",
    description:
      "A movie search application that fetches data from an external movie API and allows users to explore movie details.",
    tech: ["React", "JavaScript", "JSX", "CSS", "REST API"],
    img: usePopcornPic,
  },
  {
    name: "WorldWise",
    live: "https://worldwise-xi-ruby.vercel.app",
    repo: "https://github.com/mariamayman10/worldwise",
    description:
      "An interactive travel tracking application that lets users mark and manage visited locations on a map.",
    tech: [
      "React",
      "JavaScript",
      "JSX",
      "CSS",
      "Context API",
      "Custom Hooks",
      "REST API",
      "Maps API",
    ],
    img: worldwisePic,
  },
  {
    name: "Weather App",
    live: "https://weather-app-olive-five-72.vercel.app",
    repo: "https://github.com/mariamayman10/Weather-app",
    description:
      "A weather forecasting application that retrieves real-time weather data from an external API.",
    tech: ["Angular", "TypeScript", "REST API", "UI/UX"],
    img: weatherPic,
  },
  {
    name: "Database Optimization",
    live: null,
    repo: "https://github.com/mariamayman10/Database-Optimization",
    description:
      "A set of practical examples demonstrating database performance improvements through query optimization and indexing.",
    tech: ["PostgreSQL", "Indexing", "Query optimization"],
    img: postgresqlPic,
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <p className={styles.title}>Projects</p>
      <div className={styles.projectsWrapper}>
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
