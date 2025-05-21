import { useFetchProducts } from "../../hooks/useFetchProducts";
import ProductCard from "../productCard/ProductCard";

const ProductsMap = () => {
  const { products, productIsLoading } = useFetchProducts();

  const displayedProducts = products.slice(0, 4);
  return (
    <section>
      {productIsLoading ? (
        <p>Loading...</p>
      ) : displayedProducts.length > 0 ? (
        displayedProducts.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            image={product.image}
            title={product.title}
            price={product.price}
            discount={product.discount}
          />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </section>
  );
};

export default ProductsMap;
