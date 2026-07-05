import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage";
import AddReviewPage from "./pages/AddReviewPage";
import EditReviewPage from './pages/EditReviewPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-review" element={<AddReviewPage />} />
        <Route path="/edit-review/:id" element={<EditReviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
