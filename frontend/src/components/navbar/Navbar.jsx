import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./navbar.module.css";
import Logo from "/logo.png";
import blobImage from "../../assets/blob_01.jpg";

export default function Navbar({ isOpen, setIsOpen, cartCount }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <div className={styles.navWrapper}>
        {/* Left side: Logo */}
        <Link to="/" className={styles.logo}>
          <img src={Logo} alt="Gowala Logo" className={styles.logoImg} />
        </Link>

        {/* Center/right: Cart and Burger menu */}
        <div className={styles.rightSide}>
          {/* Burger menu */}
          <div
            className={`${styles.burger} ${isOpen ? styles.open : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div />
            <div />
            <div />
          </div>
          {/* Shopping Cart */}
          <Link
            to="/checkout"
            className={styles.cart}
            onClick={() => setIsOpen(false)}
          >
            <FaShoppingCart size={22} />
            {cartCount > 0 && (
              <span className={styles.cartBadge}>{cartCount}</span>
            )}
          </Link>
        </div>

        {/* Navigation links (mobile dropdown) */}
        {isOpen && (
          <nav
            className={styles.nav}
            style={{
              backgroundImage: `url(${blobImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <ul className={styles.navList}>
              {currentPath !== "/checkout" && (
                <li className={styles.navItem}>
                  <Link to="/checkout" onClick={() => setIsOpen(false)}>
                    Checkout
                  </Link>
                </li>
              )}
              {["/shop", "/services", "/om", "/kontakt", "/checkout"].includes(
                currentPath
              ) && (
                <li className={styles.navItem}>
                  <Link to="/" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                </li>
              )}

              {currentPath !== "/shop" && (
                <li className={styles.navItem}>
                  <Link to="/shop" onClick={() => setIsOpen(false)}>
                    Shop
                  </Link>
                </li>
              )}

              {currentPath !== "/services" && (
                <li className={styles.navItem}>
                  <Link to="/services" onClick={() => setIsOpen(false)}>
                    Services
                  </Link>
                </li>
              )}

              {currentPath !== "/om" && (
                <li className={styles.navItem}>
                  <Link to="/om" onClick={() => setIsOpen(false)}>
                    Om
                  </Link>
                </li>
              )}

              {currentPath !== "/kontakt" && (
                <li className={styles.navItem}>
                  <Link to="/kontakt" onClick={() => setIsOpen(false)}>
                    Kontakt
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}
