import { Navigate, Route, Routes } from "react-router-dom";
import UserHomePage from "./pages/UserHomePage";
import PostDetailsPage from "./pages/PostDetailsPage";
import AuthPage from "./pages/AuthPage";
import ProtectedRoute from "./components/custom/ProtectedRoute";
import ProfilePage from "./pages/ProfilePage";
import { userState } from "./atoms/userAtom";
import { useRecoilState } from "recoil";

function App() {
  const [user, _] = useRecoilState(userState);



return (
  <Routes>
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <UserHomePage />
        </ProtectedRoute>
      }
    />
    <Route path="/auth" element={user ? <Navigate to={`/`} /> : <AuthPage />} />
    <Route
      path="/profile"
      element={
        <ProtectedRoute>
          <h1>
            <ProfilePage />
          </h1>
        </ProtectedRoute>
      }
    />
    <Route
      path="/post/:id"
      element={
        <ProtectedRoute>
          <PostDetailsPage />
        </ProtectedRoute>
      }
    />
  </Routes>
);
}

export default App;
