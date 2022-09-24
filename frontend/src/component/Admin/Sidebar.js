import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <h1>NUAUNA</h1>
      </Link>
      <div className="sidebar-links">
        <Link to="/admin/dashboard">
          <p>
            <i class="fa-solid fa-circle-info"></i> Dashboard
          </p>
        </Link>
        <Link to="/admin/products">
          <p>
            <i class="fa-solid fa-shirt"></i> Products
          </p>
        </Link>
        <Link to="/admin/product">
          <p>
            <i class="fa-solid fa-plus"></i> Create Product
          </p>
        </Link>
        <Link to="/admin/orders">
          <p>
            <i class="fa-solid fa-file-invoice"></i> Orders
          </p>
        </Link>
        <Link to="/admin/users">
          <p>
            <i class="fa-solid fa-user"></i> Users
          </p>
        </Link>
        <Link to="/admin/reviews">
          <p>
            <i class="fa-solid fa-star"></i> Reviews
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
