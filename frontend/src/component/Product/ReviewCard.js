 /* eslint-disable */
import { Rating } from "@material-ui/lab";
import React from "react";
import profilePng from "./Profile.png";

const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div className="review-card">
      <div className="review-profile">
        <img
          src={profilePng}
          alt=""
        />
      </div>
      <div className="review-details">
        <p>{review.name}</p>
        <Rating {...options} />

        <p>{review.comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
