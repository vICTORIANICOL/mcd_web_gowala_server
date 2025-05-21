import { useState } from "react";
import styles from "./contactFormular.module.css";
import blob02 from "../../assets/blob_02.jpg";

export default function ContactFormular() {
  const [form, setForm] = useState({
    navn: "",
    email: "",
    besked: "",
  });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.navn || !form.email || !form.besked) {
      setError("Alle felter skal udfyldes.");
      return;
    }

    if (!validateEmail(form.email)) {
      setError("Indtast en gyldig email.");
      return;
    }

    setError("");
    setSent(true);
    // send til backend her hvis nødvendigt
  };

  const resetForm = () => {
    setForm({ navn: "", email: "", besked: "" });
    setSent(false);
  };

  if (sent) {
    return (
      <section className={styles.kontakt} style={{backgroundImage: `url(${blob02})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className={styles.sent}>
          <p>Hej {form.navn},</p>
          <p>Tak for din besked!</p>
          <p>Du hører fra os snarest.</p>
          <button className={styles.btn} onClick={resetForm}>
            Tilbage
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.kontaktBox}>
      <section
        className={styles.kontakt}
        style={{
          backgroundImage: `url(${blob02})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.container}>
          <h2 className={styles.title}>Send en besked til os</h2>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="navn"
              placeholder="Navn"
              value={form.navn}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />

            <textarea
              name="besked"
              placeholder="Besked"
              value={form.besked}
              onChange={handleChange}
            />
            <button className={styles.btn} type="submit">
              Send besked
            </button>
            {error && <p style={{ color: "#ffb3b3" }}>{error}</p>}
          </form>
        </div>
      </section>
    </section>
  );
}
