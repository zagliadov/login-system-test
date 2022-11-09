import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
              <p>
                {student.surname} {student.name}
              </p>
            </div>
          );
        })}
    </div>
  );
};
