import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const AuthWrapper = ({ children }: { children: JSX.Element }) => {
    let auth = useAuth();
    let location = useLocation();
    let navigate = useNavigate()
  
    if (!auth.user) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      navigate("/")
      return <></>
    }
  
    return children;
}

export default AuthWrapper


