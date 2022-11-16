import React from "react";
import { Link} from "react-router-dom";

export const Private = () => {
  
  return (
    <div className="flex flex-col border items-center pt-5 text-xl">
      <div className="pt-8">
        hello
      </div>
      <div>
        <Link to="/private/students">students</Link>
      </div>
    </div>
  );
};
