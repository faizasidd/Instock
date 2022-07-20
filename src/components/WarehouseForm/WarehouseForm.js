import React, { useState, useEffect } from "react";
import "./WarehouseForm.scss";
import errorIcon from "../../assets/icons/error-24px.svg";
import axios from "axios";

const WarehouseForm = () => {

  const [warehouses, setWarehouses] = useState('')

  useEffect(() => {
    getAllWarehouses()
  }, [])

  const getAllWarehouses = () => {
     axios
        .get('http://localhost:8080/warehouses')
        .then(response => {
            setWarehouses(response.data)
            console.log(response.data)
          })
        .catch(error => console.log(error))
  }

 
  //   const updateWarehouse = (id, updatedWarehouse) => {
  //     setWarehouses(
  //       warehouses.map((warehouse) =>
  //         warehouse.id === id ? updatedWarehouse : warehouse
  //       )
  //     );
  //   };

  return (
    <div className="form">
      <form
        className="form__content"
        // onSubmit={(e) => props.handleSubmit(e, props.warehouse)}
      >
        <div className="form__container">
          <h2 className="form__title">Warehouse Details</h2>
          {/* <label className="form__label">Warehouse Name</label>
          <input
            type="text"
            className="form__input-field"
            name="name"
            value={props.warehouse.name}
            placeholder="Warehouse Name"
            onChange={props.handleInputChange}
          ></input>
          {props.errors.name && (
            <div className="form__error">
              <img src={errorIcon} className="form__error-icon" />
              <p>{props.errors.name}</p>
            </div>
          )} */}
          {/* <label className="form__label">Street Address</label>
          <input
            type="text"
            className="form__input-field"
            name="address"
            placeholder="Street Address"
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
            placeholder="City"
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
            placeholder="Country"
            value={props.warehouse.country}
            onChange={props.handleInputChange}
          ></input>
          {props.errors.country && (
            <div className="form__error">
              <img src={errorIcon} className="form__error-icon" />
              <p>{props.errors.country}</p>
            </div>
          )}
        </div>
        <div className="form__container">
          <h2 className="form__title">Contact Details</h2>
          <label className="form__label">Contact Name</label>
          <input
            type="text"
            className="form__input-field"
            name="contactName"
            placeholder="Contact Name"
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
            placeholder="Position"
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
            placeholder="Phone Number"
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
            placeholder="Email"
            value={props.warehouse.contactEmail}
            onChange={props.handleInputChange}
          ></input>
          {props.errors.contactEmail && (
            <div className="form__error">
              <img src={errorIcon} className="form__error-icon" />
              <p>{props.errors.contactEmail}</p>
            </div>
          )}*/}
        </div> 
      </form>
    </div>
  );
};

export default WarehouseForm;
