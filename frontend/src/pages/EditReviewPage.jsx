import { useParams } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";

function EditReviewPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit Review</h1>

      <ReviewForm reviewId={id} />
    </div>
  );
}

export default EditReviewPage;
