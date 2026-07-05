# Product Review System - Frontend

A React-based frontend application for the Product Review System that allows users to view, add, edit, and delete product reviews. The application communicates with the backend REST API built using Express.js and MySQL.

---

## 🚀 Tech Stack

- React
- Vite
- React Router DOM
- Axios
- Formik
- Yup

---

## ✨ Features

- View all product reviews
- Add a new review
- Edit an existing review
- Delete a review
- Form validation using Formik + Yup
- REST API integration using Axios
- Client-side routing with React Router DOM

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── ReviewForm.jsx
│   └── ReviewList.jsx
│
├── pages/
│   ├── HomePage.jsx
│   ├── AddReviewPage.jsx
│   └── EditReviewPage.jsx
│
├── services/
│   └── reviewApi.js
│
├── validations/
│   └── reviewValidation.js
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project

```bash
cd frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Create a `.env` file in the root directory and add:

```env
VITE_API_URL=http://localhost:5000
```

> Ensure that the backend server is running before starting the frontend.

### 5. Start the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## 📦 Environment Variables

The project uses the following environment variable:

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Base URL of the backend API |

Example:

```env
VITE_API_URL=http://localhost:5000
```

---

## 🔗 API Endpoints Used

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/reviews` | Fetch all reviews |
| GET | `/reviews/:id` | Fetch a single review |
| POST | `/reviews` | Create a review |
| PUT | `/reviews/:id` | Update a review |
| DELETE | `/reviews/:id` | Delete a review |

---

## 📸 Current Functionality

- Home page displaying all reviews
- Separate page to add a review
- Separate page to edit a review
- Delete review functionality
- Form validation with Formik and Yup
- Backend integration using Axios

---

## 👨‍💻 Author

**Manmohan Jangid**