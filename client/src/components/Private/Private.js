import React from "react";
import { Link, useOutletContext } from "react-router-dom";

export const Private = () => {
  const [isLoggedIn, user] = useOutletContext();

  return (
    <div className="flex flex-col border items-center pt-5 text-xl">
      <div className="pt-8">hello {user?.email}</div>
      <div>
        <svg
          className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="11" />
          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
        </svg>
        <Link to="/private/students">students</Link>
      </div>
    </div>
  );
};
