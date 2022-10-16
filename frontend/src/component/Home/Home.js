/* eslint-disable */
import React, { Fragment, useEffect, useState } from "react";

import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { registerEmailForNewsletter } from "../../actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  const [email, setEmail] = useState("");

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const registerEmail = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("email", email);
    dispatch(registerEmailForNewsletter(myForm));
    alert.success("Email Subscribed Successfully");
  };


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <MetaData title="NUAUNA - Home" />
          <div className="home-section">
            <h1>NUAUNA</h1>
            <p>THE PERFECT SYNTHESIS OF CLASSIC AND EDGY!</p>
            <a href="/products" className="home-explore-button">
              EXPLORE <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
          <div className="featured-products-section" id="featured-products">
            <h1>Featured Products</h1>
            <div className="featured-products-container">
              {products &&
                products.map((product) => <ProductCard product={product} />)}
            </div>
          </div>
          <div className="about-section" id="about-section">
            <div className="about-section-content">
              <h1>About Us</h1>
              <p>
                We are the combintion of classy and edgy. We are a
                sustainability conscious brand who will serve you the same. Our
                vision is colorful joy in your everyday wear & to stay cool with
                our one-of-a-kind craftsmanship at the helm of our new
                collection. We provide perfect collision of meticulously
                threading and one-of-a-kind craftsmanship set the precedent for
                our line’s sense of classical. A perfect collision of meticulous
                threading and one of a kind craftmanship set the precedent for
                our line's sense of luxury at the heart of each collection. We
                are a Perfect Synthesis of classic and edgy.
              </p>
              <br></br>
              <p>
                collection. We provide perfect collision of meticulously
                threading and one-of-a-kind craftsmanship set the precedent for
                our line’s sense of classical. A perfect collision of meticulous
                threading and one of a kind craftmanship set the precedent for
                our line's sense of luxury at the heart of each collection. We
                are a Perfect Synthesis of classic and edgy. collection. We
                provide perfect collision of meticulously threading and
                one-of-a-kind craftsmanship set the precedent for our line’s
                sense of classical. A perfect collision of meticulous
                collection. We provide perfect collision of meticulously
                threading and one-of-a-kind craftsmanship set the precedent for
                our line’s sense of classical. A perfect collision of meticulous
              </p>
              <br></br>
              <p>
                threading and one of a kind craftmanship set the precedent for
                our line's sense of luxury at the heart of each collection. We
                are a Perfect Synthesis of classic and edgy.
              </p>
            </div>
          </div>
          <div className="newsletter-section">
            <h1>Stay In Touch</h1>
            <p>
              Subscribe To Our Newsletter And Get Notified About Latest Updates,
              Offers And Products!
            </p>
            <form className="newsletter-section-form" onSubmit={(e) => registerEmail(e)} action="/">
              <input
                className="newsletter-input-field"
                type="email"
                value={email}
                onChange={(e) => {
                  onEmailChange(e);
                }}
                placeholder="Enter a Valid Email Id"
              />
              <button
                // onClick={newsletterSignup}
                className="newsletter-submit-button"
                type="submit"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Home;
