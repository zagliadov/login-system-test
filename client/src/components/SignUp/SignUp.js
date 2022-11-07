import React from "react";
import { useNavigate } from "react-router-dom";
import { registration } from "../../features/counter/authSlice";
import { useDispatch } from "react-redux";

export const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(
        registration({
          email: email,
          password: password,
        })
      );
    }
    setEmail("");
    setPassword("");
    navigation("/signin");
  };

  return (
    <section className="border flex flex-col justify-center p-5">
      <p className="flex justify-center p-4">Sing Up</p>
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
      </form>
    </section>
  );
};
