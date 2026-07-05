import { Formik, Form, Field, ErrorMessage } from "formik";
import reviewValidationSchema from "../validations/reviewValidation";
import {
  createReview,
  getReviewById,
  updateReview,
} from "../services/reviewApi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ReviewForm({ reviewId }) {
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    product_id: "",
    user_id: "",
    username: "",
    rating: "",
    review_text: "",
    status: "Visible",
  });

  useEffect(() => {
    if (!reviewId) return;

    const fetchReview = async () => {
      try {
        const response = await getReviewById(reviewId);
        // console.log(response.data);
        setInitialValues(response.data.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReview();
  }, [reviewId]);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      if (reviewId) {
        await updateReview(reviewId, values);

        alert("Review Updated Successfully");
      } else {
        await createReview(values);

        alert("Review Added Successfully");
        resetForm();
      }

      navigate("/");
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <div>
      <h2>Add Review</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={reviewValidationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        <Form>
          <div>
            <label>Product ID</label>
            <br />

            <Field type="number" name="product_id" />

            <br />

            <ErrorMessage
              name="product_id"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <br />

          <div>
            <label>User ID</label>

            <br />

            <Field type="number" name="user_id" />

            <br />

            <ErrorMessage
              name="user_id"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <br />

          <div>
            <label>Username</label>

            <br />

            <Field type="text" name="username" />

            <br />

            <ErrorMessage
              name="username"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <br />

          <div>
            <label>Rating</label>

            <br />

            <Field type="number" name="rating" />

            <br />

            <ErrorMessage
              name="rating"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <br />

          <div>
            <label>Review</label>

            <br />

            <Field as="textarea" name="review_text" />

            <br />

            <ErrorMessage
              name="review_text"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <br />

          <div>
            <label>Status</label>

            <br />

            <Field as="select" name="status">
              <option value="Visible">Visible</option>
              <option value="Hidden">Hidden</option>
              <option value="Reported">Reported</option>
            </Field>
          </div>

          <br />

          <button type="submit">Add Review</button>
        </Form>
      </Formik>
    </div>
  );
}

export default ReviewForm;
