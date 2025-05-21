import { useState } from "react";
import styles from "./sponsors.module.css";
import sponsor1 from "../../assets/sponsors/01.png";
import sponsor2 from "../../assets/sponsors/02.png";
import sponsor3 from "../../assets/sponsors/03.png";
import sponsor4 from "../../assets/sponsors/04.png";
import sponsor5 from "../../assets/sponsors/05.png";

const logos = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5];

export default function Sponsors() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevLogo = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.floor((logos.length - 1) / 2) * 2 : prev - 2));
  };

  const nextLogo = () => {
    setCurrentIndex((prev) => (prev >= logos.length - 2 ? 0 : prev + 2));
  };

  return (
    <div className={styles.sponsorsWrapper}>
      <button
        className={styles.navButton}
        onClick={prevLogo}
        aria-label="Previous"
      >
        &#10094;
      </button>

      <div className={styles.logoContainer}>
        <img
          src={logos[currentIndex]}
          alt={`Sponsor ${currentIndex + 1}`}
          className={styles.logo}
        />
        {currentIndex + 1 < logos.length && (
          <img
            src={logos[currentIndex + 1]}
            alt={`Sponsor ${currentIndex + 2}`}
            className={styles.logo}
          />
        )}
      </div>

      <button className={styles.navButton} onClick={nextLogo} aria-label="Next">
        &#10095;
      </button>
    </div>
  );
}
