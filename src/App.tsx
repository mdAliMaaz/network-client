import { Navigate, Route, Routes } from "react-router-dom";
import UserHomePage from "./pages/UserHomePage";
import PostDetailsPage from "./pages/PostDetailsPage";
import AuthPage from "./pages/AuthPage";
import { useRecoilValue } from "recoil";
import { userState } from "./atoms/userAtom";

function App() {
  const user = useRecoilValue(userState);
  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Navigate to={`/${user.username}`} /> : <AuthPage />}
      />
      <Route
        path="/auth"
        element={user ? <Navigate to={`/${user.username}`} /> : <AuthPage />}
      />
      <Route path="/profile" element={<h1>Profile</h1>} />
      <Route
        path="/:username"
        element={user ? <UserHomePage /> : <Navigate to={"/auth"} />}
      />
      <Route path="/:username/post/:id" element={<PostDetailsPage />} />
    </Routes>
  );
}

export default App;
