import { useAuth } from "../../features/hooks/useAuth";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useAuth();
  if (isLoggedIn === undefined) {
    console.log(isLoggedIn);
    return null;
  }
  return isLoggedIn ? children : <Navigate to="/signin" />;
};
