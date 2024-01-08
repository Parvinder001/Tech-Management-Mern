import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../storage/auth";
export const Logout = () => {
  const { userLogout } = useAuth();
  useEffect(() => {
    userLogout();
  }, [userLogout()]);

  return <Navigate to="/login" />;
};
