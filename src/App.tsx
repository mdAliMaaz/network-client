import { Navigate, Route, Routes } from "react-router-dom";
import UserHomePage from "./pages/UserHomePage";
import PostDetailsPage from "./pages/PostDetailsPage";
import AuthPage from "./pages/AuthPage";
import { useRecoilValue } from "recoil";
import { userState } from "./atoms/userAtom";
import ProtectedRoute from "./components/custom/ProtectedRoute";

function App() {
  const user = useRecoilValue(userState);
  return (
    <Routes>
      <Route
        path="/auth"
        element={user ? <Navigate to={`/${user.username}`} /> : <AuthPage />}
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <h1>Home</h1>
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <h1>Profile</h1>
          </ProtectedRoute>
        }
      />
      <Route
        path="/:username"
        element={
          <ProtectedRoute>
            <UserHomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/:username/post/:id"
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
