import React from "react";
import "./AddAdmin.css";
import { useForm } from "react-hook-form";

const AddAdmin = () => {
  const { register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    data.role = "user";
    fetch("https://infinite-wildwood-81897.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log(data);
  };
  return (
    <div className="text-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="add-service-field"
          placeholder=" Name"
          {...register("name")}
        />

        <input
          className="add-service-field"
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
        />
        <br />

        <select className="add-service-scholarship" {...register("type")}>
          <option value="developer">Developer</option>
          <option value="admin">Admin</option>
          <option value="read only">Read Only</option>
        </select>
        <br />
        <input className="add-service-btn" type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddAdmin;
