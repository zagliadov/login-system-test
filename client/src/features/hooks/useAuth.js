import React from "react";
import axios from "axios";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState();

  React.useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        axios
          .post(`http://127.0.0.1:9001/api/auth/verifytoken`, token, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log(response);
            setIsLoggedIn(response.status === 200);
          });
      }
    } catch (error) {
      console.error(error);
      setIsLoggedIn(false);
    }
  }, []);

  return isLoggedIn;
};
