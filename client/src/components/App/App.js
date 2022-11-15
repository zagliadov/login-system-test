import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { SignIn } from "../SignIn/SignIn";
import { SignUp } from "../SignUp/SignUp";
import { Private } from "../Private/Private";
import { Students } from "../Private/Students/Students";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { Layout } from "../Layout/Layout";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route index element={<Layout />} />
        <Route path="private" element={<Private />} />
        <Route path="private/students" element={<Students />} />
      </Route>
    </Routes>
  );
};
