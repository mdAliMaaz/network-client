import { Navigate, Route, Routes } from "react-router-dom";
import UserHomePage from "./pages/UserHomePage";
import PostDetailsPage from "./pages/PostDetailsPage";
import AuthPage from "./pages/AuthPage";
import ProtectedRoute from "./components/custom/ProtectedRoute";
import ProfilePage from "./pages/ProfilePage";
import { userState } from "./atoms/userAtom";
import { useEffect } from "react";
import { AxiosError } from "axios";
import { axios } from "./axios";
import { useRecoilState } from "recoil";

function App() {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    (async function fetchUser() {
      try {
        const response = await axios.get("/users/profile", {
          withCredentials: true,
        });
        setUser(response.data);
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          console.log(error);
        }
      }
    })();
  }, []);
  return (
    <Routes>
      <Route
        path="/auth"
        element={user ? <Navigate to={`/${user.username}`} /> : <AuthPage />}
      />
      <Route
        path="/"
        element={user ? <Navigate to={`/${user.username}`} /> : <AuthPage />}
      />
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
