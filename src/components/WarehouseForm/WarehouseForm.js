import React from "react";
import { useState, useEffect } from "react";
import "./WarehouseForm.scss";

const WarehouseForm = (props) => {


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
        onSubmit={(e) => props.handleSubmit(e, props.warehouse)}
      >
        <label className="form__label">Warehouse Name</label>
        <input
          type="text"
          className="form__input-field"
          name="name"
          value={props.warehouse.name}
          onChange={props.handleInputChange}
        ></input>
        <h3>{props.errors.name}</h3>
        <label className="form__label">Street Address</label>
        <input
          type="text"
          className="form__input-field"
          name="address"
          placeholder="33 Pearl Street SW"
          value={props.warehouse.address}
          onChange={props.handleInputChange}
        ></input>
        <h3>{props.errors.address}</h3>

        <label className="form__label">City</label>
        <input
          type="text"
          className="form__input-field"
          name="city"
          value={props.warehouse.city}
          onChange={props.handleInputChange}
        ></input>
        <h3>{props.errors.city}</h3>

        <label className="form__label">Country</label>
        <input
          type="text"
          className="form__input-field"
          name="country"
          value={props.warehouse.country}
          onChange={props.handleInputChange}
        ></input>
        <h3>{props.errors.country}</h3>

        <h2 className="form__title">Contact Details</h2>

        <label className="form__label">Contact Name</label>
        <input
          type="text"
          className="form__input-field"
          name="contactName"
          value={props.warehouse.contactName}
          onChange={props.handleInputChange}
        ></input>
        <h3>{props.errors.contactName}</h3>
        <label className="form__label">Position</label>
        <input
          type="text"
          className="form__input-field"
          name="contactPosition"
          value={props.warehouse.contactPosition}
          onChange={props.handleInputChange}
        ></input>
        <h3>{props.errors.contactPosition}</h3>

        <label className="form__label">Phone Number</label>
        <input
          type="text"
          className="form__input-field"
          name="contactPhone"
          value={props.warehouse.contactPhone}
          onChange={props.handleInputChange}
        />
        <h3>{props.errors.contactPhone}</h3>
        <label className="form__label">Email</label>
        <input
          type="text"
          className="form__input-field"
          name="contactEmail"
          value={props.warehouse.contactEmail}
          onChange={props.handleInputChange}
        ></input>
        <h3>{props.errors.contactEmail}</h3>
      </form>
    </div>
  );
};

export default WarehouseForm;
