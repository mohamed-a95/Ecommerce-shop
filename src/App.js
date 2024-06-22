import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import { CartContext } from "./Context/CartContext";
import { CartProvider } from "./Context/CartContext";
import { useContext } from "react";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);

  const { cartItems, setCartItems, addtoCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, []);

  console.log(products);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Shop
                fotboll={products}
                addtoCart={addtoCart}
                cartItems={cartItems}
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
