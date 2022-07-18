import React, { useState } from "react";
import "./EditWarehouse.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";

const EditWarehouse = () => {
  return (
    <div className="outer-container">
      <div className="title-container">
        <img src={arrowBack} />
        <h1 className="title">Edit Warehouse</h1>
      </div>
      <div className="form">
        <h2 className="form__title">Warehouse Details</h2>
        <form className="form__content">
          <label className="form__label">Warehouse Name</label>
          <input
            type="text"
            className="form__input-field"
            required
            placeholder="Washington"
          ></input>
          <label className="form__label">Street Address</label>
          <input
            type="text"
            className="form__input-field"
            placeholder="33 Pearl Street SW"
          ></input>
          <label className="form__label">City</label>
          <input
            type="text"
            className="form__input-field"
            placeholder="Washington"
          ></input>
          <label className="form__label">Country</label>
          <input
            type="text"
            className="form__input-field"
            placeholder="USA"
          ></input>
        </form>
        <h2 className="form__title">Contact Details</h2>
        <form>
          <label className="form__label">Contact Name</label>
          <input
            type="text"
            className="form__input-field"
            placeholder="Graeme Lyon"
          ></input>
          <label className="form__label">Position</label>
          <input
            type="text"
            className="form__input-field"
            placeholder="Warehouse Manager"
          ></input>
          <label className="form__label">Phone Number</label>
          <input
            type="text"
            className="form__input-field"
            placeholder="+1(647)504-0911"
          ></input>
          <label className="form__label">Email</label>
          <input
            type="text"
            className="form__input-field"
            placeholder="glyon@instock.com"
          ></input>
        </form>
      </div>
      <div className="footer">
        <div className="footer__button">
          <button className="footer__button--white">Cancel</button>
          <button className="footer__button--blue">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditWarehouse;
