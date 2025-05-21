import styles from "./serviceCard.module.css";

export default function ServiceCard({ imageSrc, title, subtitle }) {
  return (
    <div className={styles.card}>
      <img
        src={imageSrc}
        alt={title}
        width={142}
        height={120}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}
