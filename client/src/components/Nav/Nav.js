import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeToken } from "../../features/counter/authSlice";

export const Nav = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  return (
    <header className="p-3 flex justify-end">
      <Link className="pr-4" to="/">
        Home
      </Link>
      <Link className="pr-4" to="/private">
        Private
      </Link>
      <Link className="pr-4" to="/signin">
        Sign In
      </Link>
      <Link className="pr-4" to="/signup">
        Sign Up
      </Link>
    </header>
  );
};
