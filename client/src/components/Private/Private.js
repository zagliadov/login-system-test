import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { verifyToken } from "../../features/counter/authSlice";
import { Students } from "./Students/Students";
import { Link } from "react-router-dom";

export const Private = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const navigation = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(verifyToken(localStorage.getItem("token")));
    } else {
      navigation("/");
    }
  }, [navigation, dispatch]);

  return (
    <div className="flex flex-col border items-center pt-5 text-xl">
      <h3>Private route</h3>
      <div className="pt-8">
        <p>Hello {user && user.email}</p>
        <Link to={"/private/students"}>Students</Link>
      </div>
    </div>
  );
};
