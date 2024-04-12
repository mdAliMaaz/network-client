import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Landing page.</h1>} />
      <Route path="/:username" element={<HomePage />} />
      <Route path="/profile" element={<HomePage />} />
      <Route path="/:username/post/:id" element={<h1>Post details</h1>} />
    </Routes>
  );
}

export default App;
