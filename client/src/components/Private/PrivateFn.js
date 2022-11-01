import React from "react";
import { useSelector } from "react-redux";
import { verifyToken } from "../../features/counter/authSlice";

export const PrivateFn = () => {
  const user = useSelector((state) => state.counter.user);

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      verifyToken(localStorage.getItem("token"));
    };
  }, []);

  React.useEffect(() => {
    console.log(user)
  }, [user])
  return (
    <div className="flex flex-col border items-center pt-5 text-xl">
      <h3>PrivateFn route</h3>
      <div className="pt-8">
        <p>Hello {user && user.email}</p>
      </div>
    </div>
  );
};
