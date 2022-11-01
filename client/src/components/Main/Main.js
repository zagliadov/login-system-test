import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Home from "../Home/Home";
import Private from "../Private/Private";
import { PrivateFn } from "../Private/PrivateFn";
import Nav from "../Nav/Nav";

import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="private" element={<PrivateFn />} />
        </Routes>
    </main>
  )
};

export default Main;
