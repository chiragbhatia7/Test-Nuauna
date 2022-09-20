import { Rating } from "@material-ui/lab";
import React from "react";

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
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1663250397~exp=1663250997~hmac=c95d5885acd1a8aad8ed124e170accf4c7b0072266e46dbf5a73a0a1cceba6d5"
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
