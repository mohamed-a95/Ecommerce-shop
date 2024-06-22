import React from "react";
import "./Shop.css";

function Shop(props) {
  return (
    <div>
      <div className="product-list">
        {props.fotboll.map((product) => (
          <div key={product.id}>
            <img src={product.productImage} alt={product.productName} />
            <h4>{product.productName}</h4>
            <h4>{product.price} $</h4>
            <button
              className="addToCartBtn"
              onClick={() => props.addtoCart(product.id)}
            >
              add to cart
              <br />
              <>Quantity in cart: {props.cartItems[product.id]}</>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
