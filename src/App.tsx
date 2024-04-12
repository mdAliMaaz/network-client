import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Landing page.</h1>} />
      <Route path="/profile" element={<h1>Profile</h1>} />
      <Route path="/:username" element={<h1>Home</h1>} />
      <Route path="/:username/post/:id" element={<h1>Post details</h1>} />
    </Routes>
  );
}

export default App;
