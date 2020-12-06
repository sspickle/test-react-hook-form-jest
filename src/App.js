import React from "react";
import { useForm } from "react-hook-form";

export default function App({ processForm }) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => processForm(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      Example: <input name="example" defaultValue="test" ref={register} />{" "}
      <br />
      Req: <input name="exampleRequired" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <br />
      Passwd:{" "}
      <input
        name="password"
        ref={register({
          required: true,
          minLength: 6,
          validate: {
            startsWithP: (value) => value[0] === "P",
            endsWithJ: (value) => value[-1] === "J"
          }
        })}
      />
      {errors.password && <span>Oops!{errors.password.type}</span>}
      <br />
      <input type="submit" />
    </form>
  );
}
