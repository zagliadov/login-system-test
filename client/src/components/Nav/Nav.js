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
        <div className="shrink-0">
          <img
            className="h-12 w-12 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
          />
        </div>
      </div>
    </header>
  );
};
