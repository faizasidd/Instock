import React from "react";
import { useState, useEffect } from "react";
import "./WarehouseForm.scss";

import useForm from "../../utils/useForm";
const WarehouseForm = () => {
  const { handleChange, values, errors, validate, handleSubmit } = useForm();

  const handleInputChange = (e) => {
    handleChange(e);
    setWarehouse({ ...warehouse, [e.target.name]: e.target.value });
  };

  const [warehouse, setWarehouse] = useState({
    id: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
    name: "Washington",
    address: "",
    city: "",
    country: "",
    contact: {
      name: "Greame Lyon",
      position: "Warehouse Manager",
      phone: "+1 (646) 123-1234",
      email: "glyon@instock.com",
    },
  });

  //   const updateWarehouse = (id, updatedWarehouse) => {
  //     setWarehouses(
  //       warehouses.map((warehouse) =>
  //         warehouse.id === id ? updatedWarehouse : warehouse
  //       )
  //     );
  //   };

  return (
    <div className="form">
      <h2 className="form__title">Warehouse Details</h2>
      <form
        className="form__content"
        onSubmit={(e) => handleSubmit(e, warehouse)}
      >
        <label className="form__label">Warehouse Name</label>
        <input
          type="text"
          className="form__input-field"
          name="name"
          value={warehouse.name}
          onChange={handleInputChange}
        ></input>
        {errors.name && <h3>{errors.name}</h3>}
        <label className="form__label">Street Address</label>
        <input
          type="text"
          className="form__input-field"
          name="address"
          placeholder="33 Pearl Street SW"
          value={warehouse.address}
          onChange={handleInputChange}
        ></input>
        {errors.address && <h3>{errors.address}</h3>}

        <label className="form__label">City</label>
        <input
          type="text"
          className="form__input-field"
          name="city"
          value={warehouse.city}
          onChange={handleInputChange}
        ></input>
        {errors.city && <h3>{errors.city}</h3>}

        <label className="form__label">Country</label>
        <input
          type="text"
          className="form__input-field"
          name="country"
          value={warehouse.country}
          onChange={handleInputChange}
        ></input>
        {errors.country && <h3>{errors.country}</h3>}
      </form>
      <h2 className="form__title">Contact Details</h2>
      <form>
        <label className="form__label">Contact Name</label>
        <input
          type="text"
          className="form__input-field"
          name="name"
          value={warehouse.contact.name}
          onChange={handleInputChange}
        ></input>
        <label className="form__label">Position</label>
        <input
          type="text"
          className="form__input-field"
          name="position"
          value={warehouse.contact.position}
          onChange={handleInputChange}
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
        {errors.email && <h3>{errors.email}</h3>}

        <input
          onClick={(e) => handleSubmit(e, warehouse)}
          type="submit"
          value="submit"
          className="button-submit"
        />
      </form>
    </div>
  );
};

export default WarehouseForm;
