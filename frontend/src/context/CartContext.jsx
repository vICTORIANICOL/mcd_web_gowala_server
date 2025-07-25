// CartContext.js
import { createContext, useContext, useReducer } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { v4 as uuidv4 } from "uuid";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [
        ...state,
        { ...action.product, quantity: 1, cartItemId: uuidv4() },
      ];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.cartItemId !== action.cartItemId);
    case "CHANGE_QUANTITY":
      return state.map((item) =>
        item.cartItemId === action.cartItemId
          ? { ...item, quantity: Math.max(1, item.quantity + action.delta) }
          : item
      );
    default:
      return state;
  }
};
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
