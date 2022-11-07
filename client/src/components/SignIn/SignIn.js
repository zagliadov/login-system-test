import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, removeMessage, removeToken } from "../../features/counter/authSlice";

export const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.auth.message);
  const token = useSelector((state) => state.auth.token);

  React.useEffect(() => {
    dispatch(removeToken());
  }, [dispatch]);
  
  React.useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigation("/");
    }
    if (message !== null) {
      setTimeout(() => {
        dispatch(removeMessage());
      }, 2000);
    }
  }, [dispatch, message, navigation, token]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(
        login({
          email: email,
          password: password,
        })
      );
    }
    setEmail("");
    setPassword("");
  };
  return (
    <section className="border flex flex-col justify-center p-5">
      <p className="flex justify-center p-4">Sing In</p>
      <form
        onSubmit={handleSubmit}
        className="border p-2 flex flex-col items-center"
      >
        <input
          className="border p-2"
          type="text"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-2 mt-3"
          type="text"
          value={password || ""}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="mt-2 border w-44" type="submit" value="Submit" />
        <p className="pt-3">{message && message}</p>
      </form>
    </section>
  );
};
