import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const AuthWrapper = ({ children }: { children: JSX.Element }) => {
  let auth = useAuth();
  let location = useLocation();
  let navigate = useNavigate();

  if (!auth.user) {
    // if not logged in Redirect them to the /login page
    navigate("/");
    return <></>;
  }

  return children;
};

export default AuthWrapper;
