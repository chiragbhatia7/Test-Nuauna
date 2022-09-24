import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
import MetaData from "../layout/MetaData";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "Sale",
        backgroundColor: ["black"],
        hoverBackgroundColor: ["rgb(0, 0, 0)"],
        data: [0, totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out Of Stock", "In Stock"],
    datasets: [
      {
        backgroundColor: ["gray", "black"],
        hoverBackgroundColor: ["white", "white"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };
  return (
    <div className="dashboard">
      <MetaData title="NUAUNA - Admin Dashboard" />
      <Sidebar />
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <div className="dashboard-summary">
          <div className="stats-box">
            <p>Total Sale</p>
            <h1>₹{totalAmount}</h1>
          </div>
          <div className="stats-box">
            <Link to="/admin/products">
              <p>Products</p>
              <h1>{products && products.length}</h1>
            </Link>
          </div>
          <div className="stats-box">
            <Link to="/admin/orders">
              <p>Orders</p>
              <h1>{orders && orders.length}</h1>
            </Link>
          </div>
          <div className="stats-box">
            <Link to="/admin/users">
              <p>Users</p>
              <h1>{users && users.length}</h1>
            </Link>
          </div>
        </div>
        <div className="line-chart">
          <Line data={lineState} />
        </div>
        <div className="doughnut-chart">
          <Doughnut data={doughnutState} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
