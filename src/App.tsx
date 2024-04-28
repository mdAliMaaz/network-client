import { Navigate, Route, Routes } from "react-router-dom";
import UserHomePage from "./pages/UserHomePage";
import PostDetailsPage from "./pages/PostDetailsPage";
import AuthPage from "./pages/AuthPage";
import ProtectedRoute from "./components/custom/ProtectedRoute";
import EditProfile from "./pages/EditProfile";
import { userState } from "./atoms/userAtom";
import { useRecoilState } from "recoil";
import UserProfilePage from "./pages/UserProfilePage";
import ChatPage from "./pages/ChatPage";

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
      <Route
        path="/auth"
        element={user ? <Navigate to={`/`} /> : <AuthPage />}
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <EditProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <ChatPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/:username"
        element={
          <ProtectedRoute>
            <UserProfilePage />
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
