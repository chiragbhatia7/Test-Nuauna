import React from "react";
import "../Header/Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-wrapper">
        <ul className="header-menu-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="#about-section">About Us</a>
          </li>
          <li>
            <a href="#footer-section">Contact Us</a>
          </li>
        </ul>
        <ul className="header-menu-icons">
          <li>
            <a href="/search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </li>
          <li>
            <a href="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
          <li>
            <a href="/login">
              <i className="fa-solid fa-user"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
