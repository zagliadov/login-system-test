import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import { Footer } from "../Footer/Footer";
export const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <div className="grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
