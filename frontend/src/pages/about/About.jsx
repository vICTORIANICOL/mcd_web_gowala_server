import HeaderPages from "../../components/headerPages/HeaderPages";

import card01 from "../../assets/cards/01.png";
import card02 from "../../assets/cards/02.png";
import card03 from "../../assets/cards/03.png";

import ServiceCard from "../../components/serviceCard/ServiceCard";

import Section1 from "../../components/section1/Section1";
import Section2 from "../../components/section2/Section2";
import Sponsors from "../../components/sponsors/Sponsors";
import ServicesMap from "../../components/servicesMap/ServicesMap";

export default function About() {
  return (
    <div>
      <HeaderPages
        headerText="Om Gowala Farms"
        subText="Vores kvalitet og service"
      />

      <ServicesMap limit={1} />

      <Section2
        title="Vores partnere"
        subtitle="er vi stolte af"
        text="Hos Gowala Farms samarbejder vi med nøje udvalgte partnere, der deler vores værdier om kvalitet, bæredygtighed og dyrevelfærd. Gennem disse partnerskaber sikrer vi, at vores produkter altid lever op til de højeste standarder."
      />

      <Sponsors />

      <Section1
        title="Den førende mælkeproducent"
        subtitle="Sund og nærende mælk siden 1975"
      />

      <ServiceCard
        imageSrc={card01}
        title="Farmens teknologi"
        subtitle="Vores avancerede teknologi kombinerer effektivitet med høj hygiejnestandard, hvilket garanterer produkter af den bedste kvalitet."
      />
      <ServiceCard
        imageSrc={card02}
        title="Farmens landmænd"
        subtitle="Landmændene hos Gowala Farms er dedikeret til dyrevelfærd og bæredygtigt landbrug, hvor omsorg for køerne altid kommer i første række."
      />
      <ServiceCard
        imageSrc={card03}
        title="Fra mejeriet til forbrugeren"
        subtitle="Transporten fra mejeriet til butikken foregår hurtigt og skånsomt for at bevare produkternes friskhed og kvalitet."
      />
    </div>
  );
}
