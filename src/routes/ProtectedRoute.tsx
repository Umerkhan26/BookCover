import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/authContext";

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    console.warn("User is not authenticated. Redirecting to home...");
    localStorage.setItem("redirectAfterLogin", location.pathname);
    return <Navigate to="/" replace />; // 👈 Redirect to Home instead of /login
  }

  return <Outlet />;
};

export default ProtectedRoute;
