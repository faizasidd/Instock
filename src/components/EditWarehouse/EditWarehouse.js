import React, { useState } from "react";
import "./EditWarehouse.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import WarehouseForm from "../WarehouseForm/WarehouseForm";

const EditWarehouse = () => {
  return (
    <div className="outer-container">
      <div className="title-container">
        <img src={arrowBack} />
        <h1 className="title">Edit Warehouse</h1>
      </div>
      <WarehouseForm />
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
