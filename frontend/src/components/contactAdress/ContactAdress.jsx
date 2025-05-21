// components/contactAddress/ContactAddress.jsx

import { MdPhone } from "react-icons/md";
import { GoClockFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import styles from "./contactAdress.module.css";

export default function ContactAddress() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Hurtig kontakt</h2>
      <p className={styles.description}>
        Har du spørgsmål eller ønsker du at høre mere om vores produkter?
        Kontakt os – vi står altid klar til at hjælpe!
      </p>

      <div className={styles.contact}>
        <div className={styles.item}>
          <MdPhone className={styles.icon} />
          <div>
            +88130-589-745-6987 <br />
            +1655-456-532
          </div>
        </div>

        <div className={styles.item}>
          <GoClockFill className={styles.icon} />
          <div>
            Man - Fre 09:00 - 18:00 <br />
            (undtagen helligdage)
          </div>
        </div>

        <div className={styles.item}>
          <FaLocationDot className={styles.icon} />
          <div>
            Mejerigade 14 <br />
            Mejeby
          </div>
        </div>
      </div>
    </div>
  );
}
