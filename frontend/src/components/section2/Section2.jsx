import styles from "./section2.module.css";

export default function Section2({ title, subtitle, text }) {
  return (
    <section className={styles.headerSection}>
      <h2 className={styles.headingPrimary}>{title}</h2>
      <h3 className={styles.headingSecondary}>{subtitle}</h3>
      <p className={styles.text}>{text}</p>
    </section>
  );
}
