/* eslint-disable */
import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";

import { Link } from "react-router-dom";

const Cart = ({ history }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="page-not-found">
          <h1>
            <i class="fa-solid fa-face-sad-cry"></i>
          </h1>
          <h1>Cart Is Empty</h1>
          <Link to="/products">
            <p>Browse Products</p>
          </Link>
        </div>
      ) : (
        <Fragment>
          <div className="cart-page">
            <div className="cart-header">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            {cartItems &&
              cartItems.map((item) => (
                <div className="cart-container" key={item.product}>
                  <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                  <div className="cart-input">
                    <button
                      className="minus-btn"
                      onClick={() =>
                        decreaseQuantity(item.product, item.quantity)
                      }
                    >
                      -
                    </button>
                    <input type="number" value={item.quantity} readOnly />
                    <button
                      className="plus-btn"
                      onClick={() =>
                        increaseQuantity(
                          item.product,
                          item.quantity,
                          item.stock
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <p className="cart-subtotal">{`₹${
                    item.price * item.quantity
                  }`}</p>
                </div>
              ))}

            <div className="cart-gross-profit">
              <p>Gross Total</p>
              <h1>{`₹${cartItems.reduce(
                (acc, item) => acc + item.quantity * item.price,
                0
              )}`}</h1>

              <div>
                <button
                  className="home-explore-button"
                  id="checkout-btn"
                  onClick={checkoutHandler}
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
