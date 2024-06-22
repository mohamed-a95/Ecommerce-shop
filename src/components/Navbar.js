import React from "react";
import "./navbar.css";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">
          <p>Shop</p>
        </Link>
        <Link to="/cart">
          <ShoppingCart className="icon" size={32} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
