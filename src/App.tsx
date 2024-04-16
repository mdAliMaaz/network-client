import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostDetailsPage from "./pages/PostDetailsPage";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Landing page.</h1>} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/:username" element={<HomePage />} />
      <Route path="/:username/post/:id" element={<PostDetailsPage />} />
      <Route path="/profile" element={<h1>Profile</h1>} />
    </Routes>
  );
}

export default App;
