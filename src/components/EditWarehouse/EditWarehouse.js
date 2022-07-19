import React from "react";
import "./EditWarehouse.scss";

const EditWarehouse = () => {
  return (
    <div className="outer-container">
      <div>
        <h1>Edit Warehouse</h1>
      </div>
      <div className="form">
        <h2 className="form__title">Warehouse Details</h2>
        <form className="form__content">
          <label>Warehouse Name</label>
          <input
            type="text"
            className="form__input-field"
            placeholder="Washington"
          ></input>
          <label>Street Address</label>
          <input
            type="text"
            className="form__input-field"
            placeholder="33 Pearl Street SW"
          ></input>
          <label>City</label>
          <input
            type="text"
            className="form__input-field"
            placeholder="Washington"
          ></input>
          <label>Country</label>
          <input
            type="text"
            className="form__input-field"
            placeholder="USA"
          ></input>
        </form>
        <h2>Contact Details</h2>
        <form>
          <label>Contact Name</label>
          <input
            type="text"
            className="form__input-field"
            placeholder="Graeme Lyon"
          ></input>
          <label>Position</label>
          <input
            type="text"
            className="form__input-field"
            placeholder="Warehouse Manager"
          ></input>
          <label>Phone Number</label>
          <input
            type="text"
            className="form__input-field"
            placeholder="+1(647)504-0911"
          ></input>
          <label>Email</label>
          <input
            type="text"
            className="form__input-field"
            placeholder="glyon@instock.com"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default EditWarehouse;
