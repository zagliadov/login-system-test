import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {

  
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
