import { Link, useMatch } from "react-router-dom";

export const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      className={`${match ? "text-teal-500" : ""} pr-4`}
      {...props}
    >
      {children}
    </Link>
  );
};
