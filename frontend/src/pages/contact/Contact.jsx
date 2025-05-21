import HeaderPages from "../../components/headerPages/HeaderPages";
import styles from "./contact.module.css";
import ContactFormular from "../../components/contactFormular/ContactFormular";
import ContactAdress from "../../components/contactAdress/ContactAdress";
import Section2 from "../../components/section2/Section2";
import EmployeesMap from "../../components/employeesMap/EmployeesMap";
import blobImage from "../../assets/blob_02.jpg";

export default function Contact() {
  return (
    <div className={styles.contactBox}>
      <HeaderPages
        headerText="Kontakt Gowala"
        subText="Vores kontaktinformationer"
      />

      <ContactFormular />
      <ContactAdress />

      <div
        className={styles.backgroundSection}
        style={{
          backgroundImage: `url(${blobImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "20% top",
        }}
      >
        <Section2
          title="Vores hold"
          subtitle="2000+ ansatte siden 1975"
          text="De ansatte på Gowala Farms er passionerede fagfolk, der med omsorg og ekspertise sikrer sunde dyr og produkter af højeste kvalitet."
        />

        <EmployeesMap />
      </div>
    </div>
  );
}
