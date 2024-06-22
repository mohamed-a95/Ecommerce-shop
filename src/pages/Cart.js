import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context/CartContext";
import "./Cart.css";

function Cart() {
  const [products, setProducts] = useState([]);
  const { cartItems } = useContext(CartContext);

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

  const totalCartCost = () => {
    return Object.keys(cartItems).reduce((total, id) => {
      const product = products.find((product) => product.id == id);
      if (product) {
        return total + cartItems[id] * product.price;
      } else {
        return total;
      }
    }, 0);
  };

  return (
    <div>
      {products.map((product) => {
        if (cartItems[product.id] !== 0) {
          return (
            <div className="cartContain" key={product.id}>
              <img src={product.productImage} alt={product.productName}></img>
              <div className="Cart-description">
                <p>{product.productName}</p>
                <p>Quantity: {cartItems[product.id]}</p>
                <p style={{ fontWeight: "bold" }}>
                  Total cost: {cartItems[product.id] * product.price} $
                </p>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}

      <div className="totalCost">
        <h3>The total cost is: {totalCartCost()}$ </h3>
      </div>
    </div>
  );
}

export default Cart;
