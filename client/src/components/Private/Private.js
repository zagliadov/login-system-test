import React from "react";
import { Link, useOutletContext } from "react-router-dom";

export const Private = () => {
  const [isLoggedIn, user] = useOutletContext();

  return (
    <div className="flex flex-col border items-center pt-5 text-xl">
      <div className="pt-8">hello {user?.email}</div>
      <div>
        <Link to="/private/students">students</Link>
      </div>
    </div>
  );
};
