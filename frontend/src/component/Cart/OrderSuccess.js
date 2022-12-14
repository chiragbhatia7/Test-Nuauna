 /* eslint-disable */
import React from "react";
import "./orderSuccess.css";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div>
      <div className="page-not-found">
        <h1>
        <i class="fa-solid fa-circle-check"></i>
        </h1>
        <h1>Order Placed Successfully</h1>
        <Link to="/orders">
          <p>View Orders</p>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
