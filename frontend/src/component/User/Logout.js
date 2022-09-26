 /* eslint-disable */
import React from "react";
import "../layout/Not Found/NotFound.css";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div>
      <div className="page-not-found">
        <h1>
        <i class="fa-solid fa-circle-check"></i>
        </h1>
        <h1>Logged Out Successfully</h1>
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
    </div>
  );
};

export default Logout;
