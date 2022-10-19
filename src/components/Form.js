import React from "react";
import { useForm } from "react-hook-form";

function Form({ formSub }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //console.log(errors);

  const onSub = (data) => {
    data.id = Date.now();
    data.fav = false;
    formSub(data);
    //console.log(data);
    reset();
  };

  return (
    <div className="col-sm-4 shadow rounded g-5">
      <h1 className="text-center pt-3 text-secondary h2">Add Contact</h1>
      <form onSubmit={handleSubmit(onSub)}>
        <div className="form-group">
          <label className="col-form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: "Name is required" })}
          />

          {errors.name && (
            <small className="text-danger">{errors.name.message}</small>
          )}
        </div>
        <div className="form-group">
          <label className="col-form-label">Email:</label>
          <input
            type="text"
            className="form-control"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>
        <div className="form-group">
          <label className="col-form-label">Phone:</label>
          <input
            type="text"
            className="form-control"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[789]\d{9,9}$/,
                message: "Invalid phone number",
              },
            })}
          />
          {errors.phone && (
            <small className="text-danger">{errors.phone.message}</small>
          )}
        </div>
        <input
          type="submit"
          className="btn btn-primary my-3"
          value="Add Contact"
        />
      </form>
    </div>
  );
}

export default Form;
