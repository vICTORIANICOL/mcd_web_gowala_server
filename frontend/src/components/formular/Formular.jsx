/* import styles from "./formular.module.css";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";

export default function Formular({ cartItems, onQuantityChange, onRemove }) {
  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={styles.contactBox}>
      <div className={styles.outerBox}>
        {cartItems.map((item) => (
          <div className={styles.insideBox} key={item.cartItemId}>
            <div className={styles.productBox}>
              <img src={item.image} alt={item.title} className={styles.image} />

              <div className={styles.details}>
                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.price}>{item.price} kr.</p>

                <div className={styles.quantityControl}>
                  <button onClick={() => onQuantityChange(item.cartItemId, -1)}>
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onQuantityChange(item.cartItemId, 1)}>
                    <FaPlus />
                  </button>
                </div>
              </div>

              <button
                className={styles.closeBtn}
                onClick={() => onRemove(item.cartItemId)}
              >
                <FaTimes />
              </button>
            </div>

            <div className={styles.itemTotalBox}>
              <p className={styles.itemTotal}>
                <span className={styles.totalLabel}>Total:</span>{" "}
                <span className={styles.totalPrice}>
                  {item.price * item.quantity} ,-
                </span>
              </p>
            </div>
          </div>
        ))}

        <div className={styles.totalBox}>
          <h4 className={styles.total}>I alt:</h4>
          <p>{calculateTotal()} ,-</p>
        </div>

        <div className={styles.orderBox}>
          <input
            type="email"
            placeholder="Din Email"
            className={styles.emailInput}
          />
          <button className={styles.submitBtn}>Afgiv ordre</button>
        </div>
      </div>
    </div>
  );
}
 */
import styles from "./formular.module.css";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

export default function Formular({ cartItems, onQuantityChange, onRemove }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemove = (id) => {
    Swal.fire({
      title: "Er du sikker?",
      text: "Vil du fjerne dette produkt?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5e9a13",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ja, fjern det!",
    }).then((result) => {
      if (result.isConfirmed) {
        onRemove(id);
        toast.success("Produkt fjernet fra kurven!");
      }
    });
  };

  const handleOrder = () => {
    if (!email.includes("@")) {
      toast.error("Indtast en gyldig email!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Ordre afgivet! Tak for dit køb.");
      setEmail("");
    }, 2000);
  };

  return (
    <div className={styles.contactBox}>
      <div className={styles.outerBox}>
        {cartItems.map((item) => (
          <div className={styles.insideBox} key={item.cartItemId}>
            <div className={styles.productBox}>
              <img src={item.image} alt={item.title} className={styles.image} />

              <div className={styles.details}>
                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.price}>{item.price} kr.</p>

                <div className={styles.quantityControl}>
                  <button onClick={() => onQuantityChange(item.cartItemId, -1)}>
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onQuantityChange(item.cartItemId, 1)}>
                    <FaPlus />
                  </button>
                </div>
              </div>

              <button
                className={styles.closeBtn}
                onClick={() => handleRemove(item.cartItemId)}
              >
                <FaTimes />
              </button>
            </div>

            <div className={styles.itemTotalBox}>
              <p className={styles.itemTotal}>
                <span className={styles.totalLabel}>Total:</span>{" "}
                <span className={styles.totalPrice}>
                  {item.price * item.quantity} ,-
                </span>
              </p>
            </div>
          </div>
        ))}

        <div className={styles.totalBox}>
          <h4 className={styles.total}>I alt:</h4>
          <p>{calculateTotal()} ,-</p>
        </div>

        <div className={styles.orderBox}>
          <input
            type="email"
            placeholder="Din Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.emailInput}
          />
          <button
            className={styles.submitBtn}
            onClick={handleOrder}
            disabled={loading}
          >
            {loading ? <ClipLoader size={20} color="#fff" /> : "Afgiv ordre"}
          </button>
        </div>
      </div>
    </div>
  );
}
