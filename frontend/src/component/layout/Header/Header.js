 /* eslint-disable */
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
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="/search">
              Search
            </a>
          </li>
          <li>
            <a href="/cart">
              Cart
            </a>
          </li>
          <li>
            <a href="/login">
              Account
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
