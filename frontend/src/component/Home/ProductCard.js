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
    // <Link className="productCard" to={`/product/${product._id}`}>
    //   <img src={product.images[0].url} alt={product.name} />
    //   <p>{product.name}</p>
    //   <div>
    //     <Rating {...options} />{" "}
    //     <span className="productCardSpan">
    //       {" "}
    //       ({product.numOfReviews} Reviews)
    //     </span>
    //   </div>
    //   <span>{`₹${product.price}`}</span>
    // </Link>
    <Link className="product-card" to={`/product/${product._id}`}>
      <div className="product-card-top">
        <img src={product.images[0].url} alt={product.name} />
      </div>
      <div className="product-card-bottom">
        <p>{product.name}</p>
        <div className="product-card-rating">
        <Rating {...options} />
          {/* <ReactStars
            edit={false}
            color={"#00000"}
            activeColor={"red"}
            size={window.innerWidth < 600 ? 20 : 25}
            isHalf={true}
            value={product.ratings}
          />{" "} */}
          <span>{`(${product.numberOfReviews} reviews)`}</span>
        </div>
        <p className="product-card-price">{`₹${product.price}`}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
