import Logo from "/logo.png";
import styles from "./footer.module.css";
import footerBg from "../../assets/footer_bg.jpg";
import { MdPhone } from "react-icons/md";
import { GoClockFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer style={{ backgroundImage: `url(${footerBg})` }}>
        <img className="h-20" src={Logo} alt="" />
        <p>
          Gowala Farms er en dedikeret gård, der producerer friske
          mejeriprodukter og kvalitetskød med fokus på dyrevelfærd,
          bæredygtighed og autentisk smag.
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
      </footer>
      <div className="p-10">
        <p style={{ width: "280px", textAlign: "center", margin: "0 auto" }}>
          © 2024 <span style={{ color: "#5E9A13" }}>Gowala</span>. All rights
          Reserved By <span style={{ color: "#5E9A13" }}>LabArtisian</span> &{" "}
          <span style={{ color: "#5E9A13" }}>Viborg Media College</span>
        </p>
      </div>
    </>
  );
};
export default Footer;
