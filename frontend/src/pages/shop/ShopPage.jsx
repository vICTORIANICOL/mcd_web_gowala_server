import { useFetchProducts } from "../../hooks/useFetchProducts";
import ProductCard from "../../components/productCard/ProductCard";

import styles from "./ShopPage.module.css";
import Section2 from "../../components/section2/Section2";
import HeaderPages from "../../components/headerPages/HeaderPages";

export default function Shop() {
  const { products, productIsLoading } = useFetchProducts();

  return (
    <section className={styles.shopContainer}>
      <HeaderPages
        headerText="Gowala Shopping"
        subText="Vi er taknemmelige for dit bidrag"
      />

      <Section2
        title="Alle vores produkter"
        subtitle="Alt på ét sted"
        text="Her på siden finder du alle vores friske mejeriprodukter og kvalitetskød fra Gowala Farms – direkte fra gården til dit bord."
      />

      {productIsLoading ? (
        <p> is loading...</p>
      ) : products.length > 0 ? (
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard
              key={product._id}
              image={product.image}
              title={product.title}
              price={product.price}
              discount={product.discount}
            />
          ))}
        </div>
      ) : (
        <p>Ingen produkter tilgængelige.</p>
      )}
    </section>
  );
}
