import React from "react";
import { useOnline } from "../../features/hooks/useOnline";

export const IsOnline = () => {
  const status = useOnline();
  return (
    <p
      className={`animate-pulse ${
        status ? "bg-lime-600" : "bg-red-500"
      } border w-2 h-2 rounded-full`}
    ></p>
  );
};
