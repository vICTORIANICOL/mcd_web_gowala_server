import styles from "./section1.module.css";

export default function Section1({ title, subtitle }) {
  return (
    <section className={styles.headerSection}>
      <h2 className={styles.headingPrimary}>{title}</h2>
      <h3 className={styles.headingSecondary}>{subtitle}</h3>
    </section>




  );
}
