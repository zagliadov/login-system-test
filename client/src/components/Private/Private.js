import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { verifyToken } from "../../features/counter/authSlice";
import { getStudents, testQuery } from "../../features/counter/studentsSlice";

export const Private = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const students = useSelector((state) => state.students.students);
  const navigation = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(verifyToken(localStorage.getItem("token")));
    } else {
      navigation("/");
    }
  }, [navigation, dispatch]);
  
  React.useEffect(() => {
    // dispatch(getStudents());
    dispatch(testQuery());
  }, [dispatch])

  const handleClick = () => {
    console.log(students);
  };

  return (
    <div className="flex flex-col border items-center pt-5 text-xl">
      <h3>Private route</h3>
      <div className="pt-8">
        <p>Hello {user && user.email}</p>
        <button onClick={() => handleClick()}>click</button>
      </div>
    </div>
  );
};
