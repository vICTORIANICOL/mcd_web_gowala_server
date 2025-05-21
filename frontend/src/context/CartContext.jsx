// CartContext.js
import { createContext, useContext } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { v4 as uuidv4 } from "uuid";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("cart", []);

  const addToCart = (product) => {
    // Each add creates a new item in the cart with quantity 1
    setCartItems((prev) => [
      ...prev,
      { ...product, quantity: 1, cartItemId: uuidv4() },
    ]);
  };

  const removeFromCart = (cartItemId) => {
    setCartItems((prev) =>
      prev.filter((item) => item.cartItemId !== cartItemId)
    );
  };
  

  const changeQuantity = (cartItemId, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };
  

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        changeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
