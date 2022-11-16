import React from "react";
import { IsOnline } from "../IsOnline/IsOnline";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <header className="p-2 flex justify-between">
      <div className="flex items-center">
        <IsOnline />
      </div>
      <div className="flex">
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
      </div>
    </header>
  );
};
