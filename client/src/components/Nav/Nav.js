/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { IsOnline } from "../IsOnline/IsOnline";
import { CustomLink } from "../CustomLink/CustomLink";

export const Nav = () => {
  return (
    <header className="flex justify-between p-2 h-16 bg-sky-200">
      <div className="flex items-center">
        <IsOnline />
      </div>
      <div className="flex items-center">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/private">Private</CustomLink>
        <CustomLink to="/signin">Sign In</CustomLink>
        <CustomLink to="/signup">Sign Up</CustomLink>
      </div>
    </header>
  );
};
