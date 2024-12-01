import React, { useState, useEffect } from "react";

const ProductReviews = () => {
  // Local Storage থেকে ডেটা রিড করা
  const loadReviews = () => {
    const savedReviews = localStorage.getItem("reviews");
    return savedReviews ? JSON.parse(savedReviews) : [
      { id: 1, name: "Alice", comment: "Great product!", rating: 5 },
      { id: 2, name: "Bob", comment: "Good value for money.", rating: 4 },
    ];
  };

  const [reviews, setReviews] = useState(loadReviews);
  const [newReview, setNewReview] = useState({ name: "", comment: "", rating: 1 });

  // রিভিউ আপডেট হলে Local Storage-এ সেভ করা
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews((prev) => [...prev, { ...newReview, id: prev.length + 1 }]);
    setNewReview({ name: "", comment: "", rating: 1 });
  };

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} style={{ marginBottom: "10px" }}>
          <p>
            <strong>{review.name}</strong> ({review.rating} stars)
          </p>
          <p>{review.comment}</p>
        </div>
      ))}

      <h3>Leave a Review</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Comment:</label>
          <textarea
            name="comment"
            value={newReview.comment}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Rating:</label>
          <select
            name="rating"
            value={newReview.rating}
            onChange={handleInputChange}
            required
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>
                {star}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ProductReviews;
