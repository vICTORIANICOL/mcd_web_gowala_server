import styles from "./HeaderPages.module.css";
import headerImage from "../../assets/page_header_01.jpg";

export default function HeaderPages({ headerText, subText }) {
  return (
    <div className={styles.headerWrapper}>
      <img src={headerImage} alt="Page Header" className={styles.headerImage} />
      <div className={styles.textContainer}>
        <h1 className={styles.headerText}>{headerText}</h1>
        <p className={styles.subText}>{subText}</p>
      </div>
    </div>
  );
}
