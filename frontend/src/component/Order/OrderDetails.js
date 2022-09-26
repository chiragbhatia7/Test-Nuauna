/* eslint-disable */
import React, { Fragment, useEffect } from "react";
import "./orderDetails.css";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";
import { getOrderDetails, clearErrors } from "../../actions/orderAction";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const OrderDetails = ({ match }) => {
  const { order, error, loading } = useSelector((state) => state.orderDetails);

  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getOrderDetails(match.params.id));
  }, [dispatch, alert, error, match.params.id]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Order Details" />
          <div className="process-order-dashboard">
            <MetaData title="NUAUNA - Process Order" />
            <div className="process-order-dashboard-container">
              {loading ? (
                <Loader />
              ) : (
                <div
                  style={{
                    display:
                      order.orderStatus === "Delivered" ? "block" : "grid",
                  }}
                >
                  <div className="process-order-details">
                    <div>
                      <h1>Shipping Info</h1>
                      <div>
                        <div>
                          <div>
                            <p>
                              <b>Name:</b>
                            </p>
                            <span>{order.user && order.user.name}</span>
                          </div>
                          <div>
                            <p>
                              <b>Phone:</b>
                            </p>
                            <span>
                              {order.shippingInfo && order.shippingInfo.phoneNo}
                            </span>
                          </div>
                          <div>
                            <p>
                              <b>Address:</b>
                            </p>
                            <span>
                              {order.shippingInfo &&
                                `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                            </span>
                          </div>
                        </div>

                        <h1>Payment</h1>
                        <div>
                          <div>
                            <p
                              className={
                                order.paymentInfo &&
                                order.paymentInfo.status === "succeeded"
                                  ? "green-color"
                                  : "red-color"
                              }
                            >
                              {order.paymentInfo &&
                              order.paymentInfo.status === "succeeded"
                                ? "PAID"
                                : "NOT PAID"}
                            </p>
                          </div>

                          <div>
                            <p>
                              <b>Amount:</b>
                            </p>
                            <span>{order.totalPrice && order.totalPrice}</span>
                          </div>
                        </div>

                        <h1>Order Status</h1>
                        <div>
                          <div>
                            <p
                              className={
                                order.orderStatus &&
                                order.orderStatus === "Delivered"
                                  ? "greenColor"
                                  : "redColor"
                              }
                            >
                              {order.orderStatus && order.orderStatus}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h1>Cart Items</h1>
                        <div>
                          {order.orderItems &&
                            order.orderItems.map((item) => (
                              <div className="cart-items" key={item.product}>
                                <div>
                                  <img src={item.image} alt="Product" />
                                </div>
                                <div>
                                  <Link to={`/product/${item.product}`}>
                                    {item.name}
                                  </Link>{" "}
                                </div>
                                <div>
                                  {item.quantity} X ₹{item.price} ={" "}
                                  <b>₹{item.price * item.quantity}</b>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display:
                          order.orderStatus === "Delivered" ? "none" : "block",
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderDetails;
