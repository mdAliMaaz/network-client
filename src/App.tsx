import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostDetailsPage from "./pages/PostDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Landing page.</h1>} />
      <Route path="/:username" element={<HomePage />} />
      <Route path="/profile" element={<HomePage />} />
      <Route path="/:username/post/:id" element={<PostDetailsPage />} />
    </Routes>
  );
}

export default App;
