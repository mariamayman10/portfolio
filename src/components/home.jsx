import HomeBtns from "./homeBtns";
import styles from "./home.module.css";
function Home() {
  return (
    <section id='home' className={styles.home}>
      <div className={styles.helloDiv}>Hello!</div>
      <div className={styles.homeName}>
        I'm <span className={styles.orangeName}>Mariam</span>,<br />
        Full-Stack Developer
      </div>
      <HomeBtns />
    </section>
  );
}

export default Home;
