import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import { Home } from "../Home/Home";
import { Private } from "../Private/Private";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import Nav from "../Nav/Nav";

import { Routes, Route } from "react-router-dom";
import { Students } from "../Private/Students/Students";

const Main = () => {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="private" element={<Private />}>
        </Route>
        <Route path="private/students" element={<Students />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};

export default Main;
