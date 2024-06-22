import { createContext } from "react";
import { useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({
    1: 0,
    2: 0,
    3: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
  });

  const addtoCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addtoCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
