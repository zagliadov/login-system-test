import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../Nav/Nav";
export const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />

      <footer>2022</footer>
    </>
  );
};
