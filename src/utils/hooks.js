import React from "react";
import { useState } from "react";

export const useForm = (callback, initialState = {}, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
  };
};
