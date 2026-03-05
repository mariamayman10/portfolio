import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from './contact.module.css';
const serviceKey = import.meta.env.VITE_SERVICE;
const templateKey = import.meta.env.VITE_TEMPLATE;
const publicKey = import.meta.env.VITE_PUBLICKEY;

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(serviceKey, templateKey, form, publicKey)
      .then(
        () => {
          setStatus("Message sent successfully");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Something went wrong");
        },
      );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
      />
      <button type="submit">Send Message</button>

      {status && <p>{status}</p>}
    </form>
  );
}
export default ContactForm;