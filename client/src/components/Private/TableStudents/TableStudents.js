import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStudents } from "../../../features/counter/studentsSlice";
import { CustomLink } from "../../CustomLink/CustomLink";
export const TableStudents = () => {
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getStudents());
  }, [dispatch])
  return (
    <div className="overflow-x-auto p-4 relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="py-3 px-6">Student name</th>
            <th className="py-3 px-6">Stipend</th>
            <th className="py-3 px-6">City</th>
            <th className="py-3 px-6">Course</th>
          </tr>
        </thead>

        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            {/* student name, surname */}
            <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {students &&
                students.map((student) => {
                  return (
                    <div key={student.id}>
                      <CustomLink to={`/private/student/${student.id}`}>
                        {student.name} {student.surname}
                      </CustomLink>
                    </div>
                  );
                })}
            </td>
            {/* student stipend */}
            <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {students &&
                students.map((student) => {
                  return <div key={student.id}>{student.stipend}</div>;
                })}
            </td>
            {/* student city */}
            <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {students &&
                students.map((student) => {
                  return <div key={student.id}>{student.city}</div>;
                })}
            </td>
            {/* student course */}
            <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {students &&
                students.map((student) => {
                  return <div key={student.id}>{student.course}</div>;
                })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
