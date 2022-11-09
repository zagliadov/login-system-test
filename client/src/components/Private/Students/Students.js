import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getStudents } from "../../../features/counter/studentsSlice";

export const Students = () => {
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);
  return (
    <div>
      {students &&
        students.map((student) => {
          return (
            <div key={student.id}>
              <Link to={`/private/student/${student.id}`}>
                {student.surname} {student.name}
              </Link>
            </div>
          );
        })}
    </div>
  );
};
