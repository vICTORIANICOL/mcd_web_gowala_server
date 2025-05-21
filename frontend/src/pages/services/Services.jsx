import HeaderPages from "../../components/headerPages/HeaderPages";

import News from "../../components/news/News";
import ServicesMap from "../../components/servicesMap/ServicesMap";

export default function Services() {
  return (
    <div>
      <HeaderPages
        headerText="Gowala tilbyder"
        subText="Hvad vi tilbyder vores forbrugere"
      />

      <ServicesMap />

      <News />
    </div>
  );
}
