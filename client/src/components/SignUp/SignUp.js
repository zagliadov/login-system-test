import React from "react";
import classes from "./signup.module.sass";
import { useForm } from "react-hook-form";
import { registration } from "../../features/counter/authSlice";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const { wrapper, signup, input__wrapper, input__wrapper_submit } = classes;

  const onSubmit = (data) => {
    dispatch(registration(data));
    setTimeout(() => {
      history.push("/signin");
    }, 10);
  };

  return (
    <section className={wrapper}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={signup}>
        <section className={input__wrapper}>
          <label>Email: </label>
          <input type="text" {...register("email", { required: true })} />
        </section>

        <section className={input__wrapper}>
          <label>Password: </label>
          <input type="text" {...register("password", { required: true })} />
        </section>
        <section className={input__wrapper_submit}>
          <input type="submit" />
        </section>
      </form>
    </section>
  );
};

export default SignUp;
