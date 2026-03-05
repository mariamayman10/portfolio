import ContactForm from './contactForm'
import styles from "./contact.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactWrapper}>
        <h2 className={styles.title}>Contact</h2>

        <p className={styles.subtitle}>
          Have a project in mind or an opportunity to discuss? I’d love to hear
          from you.
        </p>

        <div className={styles.content}>
          <div className={styles.info}>
            <h3>Let’s Connect</h3>
            <p>
              I'm currently open to Full-Stack Developer and Software Engineer
              opportunities. Feel free to reach out for collaborations,
              freelance projects, or just a friendly chat.
            </p>

            <div className={styles.emailBox}>
              <span>Email</span>
              <a href="mailto:mariamayman3131@gmail.com">
                mariamayman3131@gmail.com
              </a>
              <span>Phone</span>
              <p>
                (+20) 11-5281-2450
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
