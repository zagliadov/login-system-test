import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useOutletContext} from "react-router-dom";

export const Private = (props) => {
  const dispatch = useDispatch();
  const [user, message] = useOutletContext();
  
  return (
    <div className="flex flex-col border items-center pt-5 text-xl">
      <div className="pt-8">
        hello {user.email}
      </div>
      <div>
        <Link to="/private/students">students</Link>
      </div>
    </div>
  );
};
