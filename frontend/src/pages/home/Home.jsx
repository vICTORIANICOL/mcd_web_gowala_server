import Header from "../../components/header/Header";

import Section1 from "../../components/section1/Section1";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import Section2 from "../../components/section2/Section2";
import ProductsMap from "../../components/productsMap/ProductsMap";
import ProductsButton from "../../components/productsButton/ProductsButton";
import EmployeesMap from "../../components/employeesMap/EmployeesMap";
import News from "../../components/news/News";
import Sponsors from "../../components/sponsors/Sponsors";
import card01 from "../../assets/cards/01.png";
import card03 from "../../assets/cards/03.png";
import card02 from "../../assets/cards/02.png";

export default function HomePage() {
  return (
    <>
      <Header 
  />

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

      <Section2
        title="Vores produkter"
        subtitle="Vi har udvalgt de bedste produkter"
        text="Her finder du et udvalg af friske mejeriprodukter og kvalitetskød fra Gowala Farms – direkte fra gården til dit bord."
      />

      <ProductsMap />

      <ProductsButton />

      <Section2
        title="Vores hold"
        subtitle="2000+ ansatte siden 1975"
        text="De ansatte på Gowala Farms er passionerede fagfolk, der med omsorg og ekspertise sikrer sunde dyr og produkter af højeste kvalitet."
      />

      <EmployeesMap />

      <News />

      <Sponsors />
    </>
  );
}
