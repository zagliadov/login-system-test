import React from "react";
import { IsOnline } from "../IsOnline/IsOnline";
import { CustomLink } from "../CustomLink/CustomLink";

export const Nav = () => {
  return (
    <header className="p-2 flex justify-between">
      <div className="flex items-center">
        <IsOnline />
      </div>
      <div className="flex">
        <CustomLink to="/home">
          Home
        </CustomLink>
        <CustomLink to="/private">
          Private
        </CustomLink>
        <CustomLink to="/signin">
          Sign In
        </CustomLink>
        <CustomLink to="/signup">
          Sign Up
        </CustomLink>
      </div>
    </header>
  );
};
