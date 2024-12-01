import React, { useState } from "react";
import "./ReviewFilter.css"; // CSS for styling

const ReviewFilter = () => {
  const [rating, setRating] = useState(0);
  const [filter, setFilter] = useState("all");
  const reviews = [
    { id: 1, text: "Great product!", rating: 5 },
    { id: 2, text: "Not satisfied", rating: 2 },
    { id: 3, text: "Value for money", rating: 4 },
    { id: 4, text: "Terrible experience", rating: 1 },
    { id: 5, text: "Amazing quality!", rating: 5 },
  ];

  // Filter reviews based on user selection
  const filteredReviews = reviews.filter((review) => {
    if (filter === "positive") return review.rating >= 4;
    if (filter === "negative") return review.rating < 4;
    return true;
  });

  // Handle star hover and selection
  const handleRating = (index) => setRating(index);

  return (
    <div className="review-container">
      <h2>Rate and Filter Reviews</h2>
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${rating >= star ? "selected" : ""}`}
            onClick={() => handleRating(star)}
            onMouseEnter={() => handleRating(star)}
            onMouseLeave={() => setRating(0)}
          >
            ★
          </span>
        ))}
      </div>
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("positive")}>Positive</button>
        <button onClick={() => setFilter("negative")}>Negative</button>
      </div>
      <div className="review-list">
        {filteredReviews.map((review) => (
          <div key={review.id} className="review-item">
            <p>{review.text}</p>
            <div className="stars">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewFilter;
