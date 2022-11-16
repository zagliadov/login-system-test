import React from "react";
import { useAuth } from "../../features/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Layout } from "../Layout/Layout";

export const PrivateRoute = () => {
  const { isLoggedIn, user, message } = useAuth();
  if (typeof isLoggedIn === "undefined") {
    return null;
  }
  return isLoggedIn && typeof isLoggedIn !== "undefined" ? (
    <Layout user={user} message={message} />
  ) : (
    <Navigate to="/signin" />
  );
};
