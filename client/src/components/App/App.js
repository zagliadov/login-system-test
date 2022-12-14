import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { SignIn } from "../SignIn/SignIn";
import { SignUp } from "../SignUp/SignUp";
import { Private } from "../Private/Private";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { Layout } from "../Layout/Layout";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { userChangesTab } from "../../helper/helper";

export const App = () => {
  React.useEffect(() => {
    userChangesTab();
  }, []);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
        <Route element={<PrivateRoute />}>
          <Route path="/private" element={<Private />} />
        </Route>
      </Route>
    </Routes>
  );
};
