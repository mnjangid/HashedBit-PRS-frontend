import { useEffect, useState } from "react";
import { getReviews } from "../services/reviewApi";
import { Link } from "react-router-dom";
import { deleteReview } from "../services/reviewApi";

function ReviewList() {
  const [reviews, setReviews] = useState([]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this review?",
    );

    if (!confirmDelete) return;

    try {
      await deleteReview(id);

      alert("Review deleted successfully");

      setReviews((prev) => prev.filter(review => review.review_id !== id));
    } catch (error) {
      console.log(error);

      alert("Unable to delete review");
    }
  };

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

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Reviews</h2>

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
          </tr>
        </thead>

        <tbody>
          {reviews.map((review) => (
            <tr key={review.review_id}>
              <td>{review.review_id}</td>
              <td>{review.username}</td>
              <td>{review.product_id}</td>
              <td>{review.rating}</td>
              <td>{review.review_text}</td>
              <td>{review.status}</td>
              <td>
                <Link to={`/edit-review/${review.review_id}`}>
                  <button>Edit</button>
                </Link>

                <button onClick={() => handleDelete(review.review_id)}>
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
