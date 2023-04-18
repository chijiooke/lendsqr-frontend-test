import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./shared/layout/components/auth-wrapper/AuthContext";
import { Layout } from "./shared/layout/components/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import SignInPage from "./pages/sign-in/SignInPage";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./pages/404/NotFound";
import UsersPage from "./pages/users/UsersPage";
import UserDetailPage from "./pages/user-detail/UserDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route element={<AuthProvider />}>
          <Route path="/" element={<SignInPage />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<UsersPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:id" element={<UserDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
