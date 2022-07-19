import React from "react";
import "./WarehouseForm.scss";
import errorIcon from "../../assets/icons/error-24px.svg";

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
        {props.errors.name && (
          <div className="form__error">
            <img src={errorIcon} className="form__error-icon" />
            <p>{props.errors.name}</p>
          </div>
        )}
        <label className="form__label">Street Address</label>
        <input
          type="text"
          className="form__input-field"
          name="address"
          value={props.warehouse.address}
          onChange={props.handleInputChange}
        ></input>
        {props.errors.address && (
          <div className="form__error">
            <img src={errorIcon} className="form__error-icon" />
            <p>{props.errors.address}</p>
          </div>
        )}

        <label className="form__label">City</label>
        <input
          type="text"
          className="form__input-field"
          name="city"
          value={props.warehouse.city}
          onChange={props.handleInputChange}
        ></input>
        {props.errors.city && (
          <div className="form__error">
            <img src={errorIcon} className="form__error-icon" />
            <p>{props.errors.city}</p>
          </div>
        )}

        <label className="form__label">Country</label>
        <input
          type="text"
          className="form__input-field"
          name="country"
          value={props.warehouse.country}
          onChange={props.handleInputChange}
        ></input>
        {props.errors.country && (
          <div className="form__error">
            <img src={errorIcon} className="form__error-icon" />
            <p>{props.errors.country}</p>
          </div>
        )}

        <h2 className="form__title">Contact Details</h2>

        <label className="form__label">Contact Name</label>
        <input
          type="text"
          className="form__input-field"
          name="contactName"
          value={props.warehouse.contactName}
          onChange={props.handleInputChange}
        ></input>
        {props.errors.contactName && (
          <div className="form__error">
            <img src={errorIcon} className="form__error-icon" />
            <p>{props.errors.contactName}</p>
          </div>
        )}

        <label className="form__label">Position</label>
        <input
          type="text"
          className="form__input-field"
          name="contactPosition"
          value={props.warehouse.contactPosition}
          onChange={props.handleInputChange}
        ></input>
        {props.errors.contactPosition && (
          <div className="form__error">
            <img src={errorIcon} className="form__error-icon" />
            <p>{props.errors.contactPosition}</p>
          </div>
        )}

        <label className="form__label">Phone Number</label>
        <input
          type="text"
          className="form__input-field"
          name="contactPhone"
          value={props.warehouse.contactPhone}
          onChange={props.handleInputChange}
        />
        {props.errors.contactPhone && (
          <div className="form__error">
            <img src={errorIcon} className="form__error-icon" />
            <p>{props.errors.contactPhone}</p>
          </div>
        )}

        <label className="form__label">Email</label>
        <input
          type="text"
          className="form__input-field"
          name="contactEmail"
          value={props.warehouse.contactEmail}
          onChange={props.handleInputChange}
        ></input>
        {props.errors.contactEmail && (
          <div className="form__error">
            <img src={errorIcon} className="form__error-icon" />
            <p>{props.errors.contactEmail}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default WarehouseForm;
