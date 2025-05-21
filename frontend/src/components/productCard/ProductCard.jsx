import { useCart } from "../../context/CartContext";
import styles from "./productCard.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function ProductCard({ id, image, title, price, discount }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, image, title, price, discount });
  };

  return (
    <div className={styles.cardOuter}>
      <div className={styles.cardInner}>
        {discount > 0 && (
          <div className={styles.discountBadge}>-{discount} %</div>
        )}

        <img src={image} alt={title} className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>{price},-</p>
        <button className={styles.addToCart} onClick={handleAddToCart}>
          <AiOutlineShoppingCart /> Tilføj til kurv
        </button>
      </div>
    </div>
  );
}
