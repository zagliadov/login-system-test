import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../Nav/Nav";
export const Layout = ({user, message}) => {
  return (
    <>
      <Nav />
      <Outlet context={[user, message]} />

      <footer>2022</footer>
    </>
  );
};
