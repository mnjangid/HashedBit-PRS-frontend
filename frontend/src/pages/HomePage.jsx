import { Link } from "react-router-dom";
import ReviewList from "../components/ReviewList";

function HomePage() {
  return (
    <div>
      <h1>Product Review System</h1>

      <Link to="/add-review">
        <button>Add Review</button>
      </Link>

      <hr />

      <ReviewList />
    </div>
  );
}

export default HomePage;
