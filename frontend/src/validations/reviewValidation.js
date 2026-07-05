import * as Yup from "yup";

const reviewValidationSchema = Yup.object({

    product_id: Yup.number()
        .typeError("Product ID must be a number")
        .required("Product ID is required")
        .positive("Product ID must be positive")
        .integer(),

    user_id: Yup.number()
        .typeError("User ID must be a number")
        .required("User ID is required")
        .positive("User ID must be positive")
        .integer(),

    username: Yup.string()
        .required("Username is required")
        .min(3, "Minimum 3 characters")
        .max(255, "Maximum 255 characters"),

    rating: Yup.number()
        .typeError("Rating must be a number")
        .required("Rating is required")
        .min(1, "Minimum rating is 1")
        .max(5, "Maximum rating is 5"),

    review_text: Yup.string()
        .max(1000, "Maximum 1000 characters"),

    status: Yup.string()
        .oneOf(["Visible", "Hidden", "Reported"])
        .required("Status is required")

});

export default reviewValidationSchema;