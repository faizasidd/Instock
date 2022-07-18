import React from "react";
import { useState } from "react";
import Placeholder from "../components/Placeholder/Placeholder";

const useForm = (callback) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const validate = (event, name, value) => {
    //this validates each input

    switch (name) {
      case "phone":
        if (
          !new RegExp(
            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
          ).test(value)
        ) {
          //we don't want to use setErrors here
          //we just want to build and return the error object
          return {
            ...errors,
            phone: "Enter a valid phone number",
          };
        } else {
          return { ...errors, phone: "" };
        }
        break;
      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          return {
            ...errors,
            email: "Enter a valid email address",
          };
        } else {
          return { ...errors, email: "" };
        }
        break;
      default:
        if (value.length === 0) {
          console.log("setting error", name, value);
          console.log(errors);
          return {
            ...errors,
            [name]: "This is a required field",
          };
        } else {
          return { ...errors, [name]: "" }; //whatever is on the right will overwrite the left
        }
        break;
    }
  };

  const handleChange = (e) => {
    e.persist();

    let name = e.target.name;
    let value = e.target.value;
    const errors = validate(e, name, value);
    setErrors(errors);
  };

  const handleSubmit = (e, warehouse) => {
    //passing entire warehouse object
    console.log("submitting", warehouse);
    e.preventDefault();

    let existingErrors = {}; //object that holds all errors
    Object.keys(warehouse).forEach((key) => {
      //looping through each key in the warehouse object
      //and validating its value
      //and returning an error object
      const newError = validate(e, key, warehouse[key]);

      //merging the new error object to existingErrors object synchronously in memory
      existingErrors = { ...existingErrors, ...newError };
    });
    setErrors(existingErrors); //this makes the async call just once on the new error object
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
