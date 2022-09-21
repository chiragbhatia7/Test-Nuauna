import React from "react";
import "./sidebar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

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
            <i class="fa-brands fa-product-hunt"></i> Products
          </p>
        </Link>
        <Link to="/admin/product">
          <p>
            <i class="fa-solid fa-plus"></i> Create Product
          </p>
        </Link>
        <Link to="/admin/orders">
          <p>
            <i class="fa-solid fa-o"></i> Orders
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
