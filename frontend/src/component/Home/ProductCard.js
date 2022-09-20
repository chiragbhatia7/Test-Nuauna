import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="product-card" to={`/product/${product._id}`}>
      <div className="product-card-top">
        <img src={product.images[0].url} alt={product.name} />
      </div>
      <div className="product-card-bottom">
        <p>{product.name}</p>
        <div className="product-card-rating">
          <Rating {...options} />
          <span>{`(${product.numberOfReviews} reviews)`}</span>
        </div>
        <p className="product-card-price">{`₹${product.price}`}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
