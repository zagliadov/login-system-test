import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Home from "../Home/Home";

import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
    </main>
  );
};

export default Main;
