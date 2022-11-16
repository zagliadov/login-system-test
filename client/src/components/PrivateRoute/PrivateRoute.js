import React from "react";
import { useAuth } from "../../features/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const { isLoggedIn } = useAuth();
  if (typeof isLoggedIn === "undefined") {
    return null;
  }
  return isLoggedIn && typeof isLoggedIn !== "undefined" ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" />
  );
};
