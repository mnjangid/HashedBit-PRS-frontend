import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getReviews = () => API.get("/reviews");

export const createReview = (data) => API.post("/reviews", data);

export const updateReview = (id, data) => API.put(`/reviews/${id}`, data);

export const deleteReview = (id) => API.delete(`/reviews/${id}`);

export const getReviewById = (id) => API.get(`/reviews/${id}`);
