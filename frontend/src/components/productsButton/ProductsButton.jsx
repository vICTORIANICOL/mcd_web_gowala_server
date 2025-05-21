import { useNavigate } from "react-router-dom";
import styles from "./productsButton.module.css";

const ProductsButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop");
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      Se alle produkter
    </button>
  );
};

export default ProductsButton;
