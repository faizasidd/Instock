import React from "react";
import { useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log("The input name is", e.target.name);
    console.log("The input value is", e.target.value);
  };

  const validate = (event, name, value) => {
    //this validates each input

    switch (name) {
      case "phone":
        if (
          !new RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/).test(
            value
          )
        ) {
          setErrors({
            ...errors,
            phone: "Enter a valid phone number",
          });
        }
        break;
      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        }
        break;
      default:
        if (value.length <= 1) {
          setErrors({
            ...errors,
            default: "This is a required field",
          });
        }
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return {
    handleChange,
    handleSubmit,
    validate,
    values,
    errors,
  };
};

export default useForm;
