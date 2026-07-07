import { useEffect, useState } from "react";
import { getReviews, deleteReview } from "../services/reviewApi";
import { Link } from "react-router-dom";

function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await getReviews();
      setReviews(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this review?",
    );

    if (!confirmDelete) return;

    try {
      await deleteReview(id);

      alert("Review deleted successfully");

      setReviews((prev) => prev.filter((review) => review.review_id !== id));
    } catch (error) {
      console.log(error);
      alert("Unable to delete review");
    }
  };

  // Calculate average rating for each product
  const averageRatings = reviews.reduce((acc, review) => {
    if (!acc[review.product_id]) {
      acc[review.product_id] = {
        totalRating: 0,
        totalReviews: 0,
      };
    }

    acc[review.product_id].totalRating += review.rating;
    acc[review.product_id].totalReviews += 1;

    return acc;
  }, {});

  const renderStars = (averageRating) => {
    const roundedRating = Math.round(averageRating);

    return "⭐".repeat(roundedRating) + "☆".repeat(5 - roundedRating);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Reviews</h2>

      {/* Average Rating Section */}
      <h3>Product Rating Summary</h3>

      {Object.entries(averageRatings).map(([productId, data]) => (
        <div
          key={productId}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
          }}
        >
          <h4>Product ID: {productId}</h4>

          <p>
            <strong>Average Rating:</strong>{" "}
            {renderStars(data.totalRating / data.totalReviews)} (
            {(data.totalRating / data.totalReviews).toFixed(1)} / 5)
          </p>

          <p>
            <strong>Total Reviews:</strong> {data.totalReviews}
          </p>
        </div>
      ))}

      <table
        border="1"
        cellPadding="10"
        style={{
          borderCollapse: "collapse",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Product</th>
            <th>Rating</th>
            <th>Review</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {reviews.map((review) => (
            <tr key={review.review_id}>
              <td>{review.review_id}</td>
              <td>{review.username}</td>
              <td>{review.product_id}</td>
              <td>{"⭐".repeat(review.rating) + "☆".repeat(5-review.rating)}</td>
              <td>{review.review_text}</td>
              <td>{review.status}</td>

              <td>
                <Link to={`/edit-review/${review.review_id}`}>
                  <button>Edit</button>
                </Link>

                <button
                  onClick={() => handleDelete(review.review_id)}
                  style={{ marginLeft: "8px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReviewList;
