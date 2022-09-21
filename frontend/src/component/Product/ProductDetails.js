import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../actions/productAction";
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { addItemsToCart } from "../../actions/cartAction";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const {product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const {success, error: reviewError } = useSelector(
    (state) => state.newReview
  );

  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (product.stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(match.params.id, quantity));
    alert.success("Item Added To Cart");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", match.params.id);

    dispatch(newReview(myForm));

    setOpen(false);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert, reviewError, success]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="product-details">
            <div className="product-details-left">
              <div>
                <Carousel>
                  {product.images &&
                    product.images.map((item, i) => (
                      <img
                        className="carousel-image"
                        key={item.url}
                        src={item.url}
                        alt={`${i} Slide`}
                      />
                    ))}
                </Carousel>
              </div>
            </div>
            <div className="product-details-right">
              <div className="product-name-and-id">
                <h1>{product.name}</h1>
                <p>Product #{product._id}</p>
              </div>
              <div className="product-ratings-and-reviews">
                <Rating {...options} />
                <span>{`(${product.numberOfReviews} reviews)`}</span>
              </div>
              <div className="product-price">
                <p>{`₹${product.price}`}</p>
              </div>
              <div className="product-units-and-cart">
                <span>
                  <button className="minus-btn" onClick={decreaseQuantity}>
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <input readOnly type="number" value={quantity}></input>
                  <button className="plus-btn" onClick={increaseQuantity}>
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </span>
                <span>
                  <button onClick={addToCartHandler}>Add To Cart</button>
                </span>
              </div>
              <div className="product-status">
                <p>
                  Status:
                  <b
                    className={
                      product.stock < 1
                        ? "status-out-of-stock"
                        : "status-in-stock"
                    }
                  >
                    {product.stock < 1 ? " Out Of Stock" : " In Stock"}
                  </b>
                </p>
              </div>
              <div className="product-description">
                <p>Description: {product.description}</p>
              </div>
              <div className="product-review">
                <button onClick={submitReviewToggle}>Submit Review</button>
              </div>
            </div>
          </div>
          <div className="product-reviews">
            <h1>Reviews</h1>
            <Dialog
              aria-labelledby="simple-dialog-title"
              open={open}
              onClose={submitReviewToggle}
            >
              <DialogTitle>Submit Review</DialogTitle>
              <DialogContent className="submit-dialogue">
                <Rating
                  onChange={(e) => setRating(e.target.value)}
                  value={rating}
                  size="large"
                />

                <textarea
                  className="submit-dialogue-text-area"
                  cols="30"
                  rows="5"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </DialogContent>
              <DialogActions>
                <Button onClick={submitReviewToggle} color="secondary">
                  Cancel
                </Button>
                <Button onClick={reviewSubmitHandler} color="primary">
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
            {product.reviews && product.reviews[0] ? (
              <div className="reviews">
                {product.reviews &&
                  product.reviews.map((review) => (
                    <ReviewCard review={review} />
                  ))}
              </div>
            ) : (
              <p>No Reviews Yet</p>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ProductDetails;
