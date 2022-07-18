import React from "react";
import "./WarehouseForm.scss";

import useForm from "../../utils/useForm";
const WarehouseForm = () => {
  const { handleChange, values, errors, validate } = useForm();

  console.log("Form values are:", values);
  //   const validateInputFields = (e) => {
  //     let errors = {};
  //     if (e.target.value === "") {
  //       errors = "This field is required";
  //     }
  //     return errors;
  //   };

  console.log(errors)
  return (
    <div className="form">
      <h2 className="form__title">Warehouse Details</h2>
      <form className="form__content">
        <label className="form__label">Warehouse Name</label>
        <input
          type="text"
          className="form__input-field"
          name="name"
          placeholder="Washington"
          onChange={handleChange}
        ></input>
        <label className="form__label">Street Address</label>
        <input
          type="text"
          className="form__input-field"
          name="address"
          placeholder="33 Pearl Street SW"
          onChange={handleChange}
        ></input>
        <label className="form__label">City</label>
        <input
          type="text"
          className="form__input-field"
          name="city"
          placeholder="Washington"
          onChange={handleChange}
        ></input>
        <label className="form__label">Country</label>
        <input
          type="text"
          className="form__input-field"
          name="country"
          placeholder="USA"
          onChange={handleChange}
        ></input>
      </form>
      <h2 className="form__title">Contact Details</h2>
      <form>
        <label className="form__label">Contact Name</label>
        <input
          type="text"
          className="form__input-field"
          name="name"
          placeholder="Graeme Lyon"
          onChange={handleChange}
        ></input>
        <label className="form__label">Position</label>
        <input
          type="text"
          className="form__input-field"
          name="position"
          placeholder="Warehouse Manager"
          onChange={handleChange}
        ></input>
        <label className="form__label">Phone Number</label>
        <input
          type="text"
          className="form__input-field"
          name="phone"
          placeholder="+1(647)504-0911"
          onChange={handleChange}
        />
        {errors.phone && <h3>{errors.phone}</h3>}
        <label className="form__label">Email</label>
        <input
          type="text"
          className="form__input-field"
          name="email"
          placeholder="glyon@instock.com"
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
};

export default WarehouseForm;
