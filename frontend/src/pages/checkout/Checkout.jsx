import { useCart } from "../../context/CartContext";
import Formular from "../../components/formular/Formular";
import HeaderPages from "../../components/headerPages/HeaderPages";
import Section2 from "../../components/section2/Section2";
import styles from "./checkout.module.css";

export default function Checkout() {
  const { cartItems, removeFromCart, changeQuantity } = useCart();

  return (
    <div className={styles.contactBox}>
      <HeaderPages
        headerText=" Gowala shopping"
        subText="Færdiggør din bestilling"
      />

      <Section2 title="Bestil" subtitle="Udfyld venligst formularen herunder" />

      <Formular
        cartItems={cartItems}
        onQuantityChange={changeQuantity}
        onRemove={removeFromCart}
      />
    </div>
  );
}
