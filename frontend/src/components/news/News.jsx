import { useState } from "react";
import styles from "./news.module.css";
import blobImage from "../../assets/blob_01.jpg";

export default function News() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameFromEmail = email.split("@")[0];
    const capitalizedName =
      nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
    setUserName(capitalizedName);
    setIsSubmitted(true);
    setEmail("");
  };

  const handleBack = () => {
    setIsSubmitted(false);
  };

  return (
    <div className={styles.newsWrapper}>
      <img src={blobImage} alt="Background Blob" className={styles.blobImage} />

      {!isSubmitted ? (
        <>
          <div className={styles.contentBox}>
            <h2 className={styles.title}>Nyhedsbrev</h2>
            <p className={styles.subtitle}>
              Få nyhederne fra gården på din mail.
            </p>
            <p className={styles.description}>
              Tilmeld dig vores nyhedsbrev - så kan du altid følge med i, hvad
              der sker på farmen.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Din Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Tilmeld</button>
          </form>
        </>
      ) : (
        <div className={styles.thankYouOverlay}>
          <div className={styles.thankYouMessage}>
            <h2>
              <span className={styles.takBlack}>Tak</span>, {userName}!
            </h2>
            <p>Du har nu tilmeldt dig vores nyhedsbrev.</p>
            <button className={styles.backButton} onClick={handleBack}>
              Tilbage
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
