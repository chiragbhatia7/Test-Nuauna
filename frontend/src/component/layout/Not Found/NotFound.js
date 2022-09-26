 /* eslint-disable */
import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const notFound = () => {
  return (
    <div>
      <div className="page-not-found">
        <h1>
          <i class="fa-solid fa-circle-exclamation"></i>
        </h1>
        <h1>Page Not Found</h1>
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
    </div>
  );
};

export default notFound;
