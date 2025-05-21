import styles from "./ServiceSection.module.css";
import { FaCheck } from "react-icons/fa";

export default function ServiceSection({ title, description, list, image }) {
  return (
    <div className={styles.serviceSection}>
      <img src={image} alt={title} className={styles.image} />

      <div className={styles.textDiv}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {Array.isArray(list) && list.length > 0 && (
          <ul className={styles.list}>
            {list.map((item, idx) => (
              <li key={idx} className={styles.listItem}>
                <FaCheck className={styles.checkIcon} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
