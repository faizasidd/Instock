import React, { useState } from "react";
import "./AddWarehouse.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import useForm from "../../utils/useForm";
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddWarehouse = (props) => {
  const [warehouse, setWarehouse] = useState({
  });

  const addWarehouse = (e) => {
    e.preventDefault();
    if (handleSubmit(e, warehouse)) {
      axios
        .post(
          'http://localhost:8080/warehouses/',
          warehouse,
          {
            "Content-Type": "application/json",
          }
        )
        .then((response) => {
          console.log(response);
        });
    }
  };
  const { handleChange, values, errors, handleSubmit } = useForm();
  const handleInputChange = (e) => {
    handleChange(e);
    setWarehouse({ ...warehouse, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-warehouse">
      <div className="add-warehouse__title-container">
        <Link to="/">
        <img className="add-warehouse__back-icon"src={arrowBack} />
        </Link>
        <h1 className="add-warehouse__title">Add Warehouse</h1>
      </div>
      <div className="add-warehouse__form-container">
        <WarehouseForm
          handleInputChange={handleInputChange}
          warehouse={warehouse}
          setWarehouse={setWarehouse}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="add-warehouse__button-container">
        <Link to='/'>
        <button className="add-warehouse__button">Cancel</button>
        </Link>
        <button
          onClick={addWarehouse}
          type="submit"
          value="submit"
          className="add-warehouse__button--save"
        >
          + Add Warehouse
        </button>
      </div>
    </div>
  );
};

export default AddWarehouse;
