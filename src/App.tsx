import { Route, Routes } from "react-router-dom";
import "./app.scss";
import { AuthProvider } from "./common/layout/components/auth-wrapper/AuthContext";
import { Layout } from "./common/layout/components/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import SignInPage from "./pages/sign-in/SignInPage";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route element={<AuthProvider />}>
          <Route path="/" element={<SignInPage />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
